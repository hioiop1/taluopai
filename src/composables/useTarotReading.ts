import { computed, onBeforeUnmount, ref } from 'vue';
import type { DrawnCard, SpreadMode, TarotCard } from '../data/tarot';
import { spreadLabels, tarotDeck } from '../data/tarot';

function shuffle<T>(items: T[]): T[] {
  const copied = [...items];

  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }

  return copied;
}

function toDrawnCard(card: TarotCard): DrawnCard {
  return {
    ...card,
    reversedFlag: Math.random() > 0.5
  };
}

export function useTarotReading() {
  const spreadMode = ref<SpreadMode>('single');
  const question = ref('');
  const drawnCards = ref<DrawnCard[]>([]);
  const revealedCount = ref(0);
  const isDrawing = ref(false);

  let revealTimers: number[] = [];

  const cardCount = computed(() => (spreadMode.value === 'single' ? 1 : 3));
  const positions = computed(() => spreadLabels[spreadMode.value]);
  const deckStats = computed(() => ({
    total: tarotDeck.length,
    major: 22,
    minor: tarotDeck.length - 22
  }));

  const summaryText = computed(() => {
    if (drawnCards.value.length === 0) return '';

    const header = question.value ? `问题：${question.value}` : '问题：此刻需要知道什么';
    const cards = drawnCards.value
      .map((card, index) => {
        const meaning = getMeaning(card);
        const position = positions.value[index];
        const orientation = card.reversedFlag ? '逆位' : '正位';
        return `${position}｜${card.nameZh}${orientation}：${meaning.advice}`;
      })
      .join('\n');

    return `${header}\n${cards}`;
  });

  function clearRevealTimers() {
    revealTimers.forEach((timer) => window.clearTimeout(timer));
    revealTimers = [];
  }

  function drawCards() {
    clearRevealTimers();
    isDrawing.value = true;
    revealedCount.value = 0;
    drawnCards.value = shuffle(tarotDeck).slice(0, cardCount.value).map(toDrawnCard);

    drawnCards.value.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        revealedCount.value = index + 1;

        if (index === drawnCards.value.length - 1) {
          isDrawing.value = false;
        }
      }, 420 + index * 520);

      revealTimers.push(timer);
    });
  }

  function resetAll() {
    clearRevealTimers();
    question.value = '';
    drawnCards.value = [];
    revealedCount.value = 0;
    isDrawing.value = false;
    spreadMode.value = 'single';
  }

  function getMeaning(card: DrawnCard) {
    return card.reversedFlag ? card.reversed : card.upright;
  }

  function isRevealed(index: number) {
    return index < revealedCount.value;
  }

  onBeforeUnmount(() => {
    clearRevealTimers();
  });

  return {
    spreadMode,
    question,
    drawnCards,
    revealedCount,
    isDrawing,
    positions,
    deckStats,
    summaryText,
    drawCards,
    resetAll,
    getMeaning,
    isRevealed
  };
}
