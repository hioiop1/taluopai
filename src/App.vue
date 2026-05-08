<script setup lang="ts">
import { ref } from 'vue';
import TarotControls from './components/TarotControls.vue';
import TarotResultPanel from './components/TarotResultPanel.vue';
import { useTarotReading } from './composables/useTarotReading';
import { copyText } from './utils/clipboard';
import { exportElementAsImage } from './utils/poster';

const {
  spreadMode,
  question,
  drawnCards,
  isDrawing,
  positions,
  deckStats,
  summaryText,
  drawCards,
  resetAll,
  getMeaning,
  isRevealed
} = useTarotReading();

const isSavingImage = ref(false);
const actionMessage = ref('');
const posterRef = ref<HTMLElement | null>(null);

function setActionMessage(message: string) {
  actionMessage.value = message;
  window.setTimeout(() => {
    if (actionMessage.value === message) {
      actionMessage.value = '';
    }
  }, 2600);
}

async function handleCopySummary() {
  const copied = await copyText(summaryText.value);
  setActionMessage(
    copied
      ? '启示已经收拢成句，可以直接送往对话里。'
      : '这段启示暂时未能被带走，请手动取下它。'
  );
}

async function handleExportPoster() {
  if (!posterRef.value || isDrawing.value) return;

  isSavingImage.value = true;

  try {
    await exportElementAsImage(posterRef.value, `tarot-reading-${Date.now()}.png`);
    setActionMessage('牌面已凝成图像，适合留存，也适合转交给此刻想起的人。');
  } catch {
    setActionMessage('图像未能顺利显现，请稍后再试一次。');
  } finally {
    isSavingImage.value = false;
  }
}

drawCards();
</script>

<template>
  <div class="page-shell">
    <section class="hero-panel">
      <div class="hero-copy">
        <span class="eyebrow">Tarot H5</span>
        <h1>塔罗灵感</h1>
        <p>
          当问题尚未成形，牌面会先替你照见轮廓。把注意力放回心里，抽出此刻真正靠近你的那一道讯息。
        </p>
        <a-space wrap class="hero-tags">
          <a-tag color="gold">完整牌库 {{ deckStats.total }} 张</a-tag>
          <a-tag color="geekblue">大阿尔卡那 {{ deckStats.major }}</a-tag>
          <a-tag color="green">小阿尔卡那 {{ deckStats.minor }}</a-tag>
        </a-space>
      </div>

      <TarotControls
        v-model:question="question"
        v-model:spread-mode="spreadMode"
        :is-drawing="isDrawing"
        @draw="drawCards"
        @reset="resetAll"
      />
    </section>

    <TarotResultPanel
      v-model:poster-ref="posterRef"
      :question="question"
      :positions="positions"
      :drawn-cards="drawnCards"
      :is-drawing="isDrawing"
      :summary-text="summaryText"
      :action-message="actionMessage"
      :is-saving-image="isSavingImage"
      :is-revealed="isRevealed"
      :get-meaning="getMeaning"
      @copy="handleCopySummary"
      @export="handleExportPoster"
    />

    <section class="share-panel">
      <a-card :bordered="false" class="tips-card">
        <h3>阅读仪式</h3>
        <p>先留意第一张让你停住呼吸的牌，再慢慢回看整组讯息。很多时候，真正先开口的，是你的直觉。</p>
        <p>若答案没有立刻落下，也不必催促。让牌意在心里停留一会儿，往往比急着解释它更接近真实。</p>
      </a-card>
    </section>
  </div>
</template>
