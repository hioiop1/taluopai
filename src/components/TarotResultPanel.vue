<script setup lang="ts">
import TarotGlyph from './TarotGlyph.vue';
import type { DrawnCard } from '../data/tarot';

defineProps<{
  question: string;
  positions: string[];
  drawnCards: DrawnCard[];
  isDrawing: boolean;
  summaryText: string;
  actionMessage: string;
  isSavingImage: boolean;
  isRevealed: (index: number) => boolean;
  getMeaning: (card: DrawnCard) => DrawnCard['upright'];
}>();

const posterRef = defineModel<HTMLElement | null>('posterRef');

const emit = defineEmits<{
  copy: [];
  export: [];
}>();
</script>

<template>
  <section class="result-panel">
    <div class="result-header">
      <div>
        <span class="eyebrow">Reading</span>
        <h2>显现的牌面</h2>
      </div>
      <a-tag color="gold">{{ drawnCards.length === 1 ? '1 张牌' : '3 张牌' }}</a-tag>
    </div>

    <a-alert
      v-if="question"
      type="info"
      show-icon
      :message="`你送出的提问：${question}`"
    />

    <div ref="posterRef" class="poster-frame">
      <div class="poster-head">
        <div>
          <span class="eyebrow">Tarot Reading</span>
          <h3>今夜讯息</h3>
        </div>
        <div class="poster-brand">塔罗灵感</div>
      </div>

      <p class="poster-question">
        {{ question || '此刻，什么最值得被看见？' }}
      </p>

      <div class="cards-grid">
        <a-card
          v-for="(card, index) in drawnCards"
          :key="`${card.id}-${index}`"
          :bordered="false"
          class="tarot-card"
          :class="{ waiting: !isRevealed(index) }"
          :style="{ animationDelay: `${index * 140}ms` }"
        >
          <div class="card-stage" :class="{ revealed: isRevealed(index) }">
            <div class="card-back">
              <svg class="card-back-ornament" viewBox="0 0 220 320" aria-hidden="true">
                <defs>
                  <linearGradient id="backGlow" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#f2d5a6" stop-opacity="0.7" />
                    <stop offset="100%" stop-color="#b98949" stop-opacity="0.18" />
                  </linearGradient>
                </defs>
                <rect x="18" y="18" width="184" height="284" rx="20" fill="none" stroke="url(#backGlow)" stroke-width="1.2" />
                <circle cx="110" cy="86" r="36" fill="none" stroke="url(#backGlow)" stroke-width="1.4" />
                <circle cx="110" cy="86" r="14" fill="none" stroke="url(#backGlow)" stroke-width="1.1" />
                <path d="M110 44 L122 72 L152 75 L128 95 L136 126 L110 108 L84 126 L92 95 L68 75 L98 72 Z" fill="none" stroke="url(#backGlow)" stroke-width="1.1" />
                <path d="M110 132 L110 218" stroke="url(#backGlow)" stroke-width="1.1" stroke-dasharray="4 8" />
                <circle cx="110" cy="242" r="28" fill="none" stroke="url(#backGlow)" stroke-width="1.3" />
                <path d="M82 242 Q110 214 138 242 Q110 270 82 242 Z" fill="none" stroke="url(#backGlow)" stroke-width="1.1" />
              </svg>
              <div class="back-stars">✦ ✦ ✦</div>
              <div class="back-title">TAROT</div>
              <div class="back-subtitle">{{ positions[index] }}</div>
            </div>

            <div class="card-front">
              <div class="card-face" :class="{ reversed: card.reversedFlag }">
                <svg class="card-front-ornament" viewBox="0 0 220 320" aria-hidden="true">
                  <defs>
                    <linearGradient id="frontGlow" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stop-color="#ffe4ba" stop-opacity="0.62" />
                      <stop offset="100%" stop-color="#d1a96f" stop-opacity="0.16" />
                    </linearGradient>
                  </defs>
                  <rect x="14" y="14" width="192" height="292" rx="22" fill="none" stroke="url(#frontGlow)" stroke-width="1.1" />
                  <path d="M110 42 C124 60 142 74 166 84 C142 94 124 108 110 126 C96 108 78 94 54 84 C78 74 96 60 110 42 Z" fill="none" stroke="url(#frontGlow)" stroke-width="1" />
                  <path d="M110 278 C124 260 142 246 166 236 C142 226 124 212 110 194 C96 212 78 226 54 236 C78 246 96 260 110 278 Z" fill="none" stroke="url(#frontGlow)" stroke-width="1" />
                  <circle cx="110" cy="160" r="42" fill="none" stroke="url(#frontGlow)" stroke-width="1.2" />
                  <circle cx="110" cy="160" r="22" fill="none" stroke="url(#frontGlow)" stroke-width="1" />
                </svg>
                <TarotGlyph :card="card" />
                <div class="arcana">{{ card.arcana }}</div>
                <div class="card-name">{{ card.nameZh }}</div>
                <div class="card-en">{{ card.nameEn }}</div>
              </div>
            </div>
          </div>

          <div v-if="isRevealed(index)" class="reading-block">
            <div class="position-label">{{ positions[index] }}</div>
            <a-space wrap>
              <a-tag v-if="card.suit">{{ card.suit }}</a-tag>
              <a-tag v-if="card.element">{{ card.element }}</a-tag>
              <a-tag v-for="keyword in card.keywords" :key="keyword">{{ keyword }}</a-tag>
              <a-tag :color="card.reversedFlag ? 'volcano' : 'cyan'">
                {{ card.reversedFlag ? '逆位' : '正位' }}
              </a-tag>
            </a-space>

            <div class="meaning-list">
              <div class="meaning-item">
                <span>主题</span>
                <p>{{ getMeaning(card).theme }}</p>
              </div>
              <div class="meaning-item">
                <span>情感</span>
                <p>{{ getMeaning(card).love }}</p>
              </div>
              <div class="meaning-item">
                <span>现实</span>
                <p>{{ getMeaning(card).career }}</p>
              </div>
              <div class="meaning-item">
                <span>指引</span>
                <p>{{ getMeaning(card).advice }}</p>
              </div>
            </div>
          </div>
        </a-card>
      </div>

      <div v-if="summaryText && !isDrawing" class="summary-panel">
        <div class="summary-header">
          <span class="eyebrow">Oracle Copy</span>
          <h3>留给此刻的话</h3>
        </div>
        <pre class="summary-text">{{ summaryText }}</pre>
        <p class="summary-tip">它适合被收藏，也适合被转交给另一个正在等待答案的人。</p>
      </div>
    </div>

    <div v-if="summaryText && !isDrawing" class="action-bar">
      <a-space wrap>
        <a-button type="primary" @click="emit('copy')">收下这段话</a-button>
        <a-button :loading="isSavingImage" @click="emit('export')">
          {{ isSavingImage ? '图像正在凝成...' : '留下这张牌面' }}
        </a-button>
      </a-space>
      <p v-if="actionMessage" class="action-message">{{ actionMessage }}</p>
    </div>
  </section>
</template>
