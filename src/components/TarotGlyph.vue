<script setup lang="ts">
import { computed } from 'vue';
import type { DrawnCard } from '../data/tarot';

const props = defineProps<{
  card: DrawnCard;
}>();

const isMajor = computed(() => props.card.id < 22);

const suitMarkup = computed(() => {
  switch (props.card.suit) {
    case '权杖':
      return {
        top: 'M110 54 L122 86 L110 118 L98 86 Z',
        mid: 'M110 110 L118 206',
        side1: 'M86 136 Q110 120 134 136',
        side2: 'M92 164 Q110 150 128 164'
      };
    case '圣杯':
      return {
        top: 'M74 96 H146 Q142 146 124 164 H96 Q78 146 74 96 Z',
        mid: 'M110 164 L110 196',
        side1: 'M92 196 H128',
        side2: 'M84 210 H136'
      };
    case '宝剑':
      return {
        top: 'M110 54 L124 92 L110 228 L96 92 Z',
        mid: 'M84 106 H136',
        side1: 'M94 78 L126 78',
        side2: 'M100 228 H120'
      };
    default:
      return {
        top: 'M110 62 L148 90 L134 136 L86 136 L72 90 Z',
        mid: 'M110 136 L110 204',
        side1: 'M92 204 H128',
        side2: 'M84 218 H136'
      };
  }
});
</script>

<template>
  <svg class="tarot-glyph" viewBox="0 0 220 320" aria-hidden="true">
    <defs>
      <linearGradient id="glyphGlow" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#ffe6bd" stop-opacity="0.82" />
        <stop offset="100%" stop-color="#bb8848" stop-opacity="0.24" />
      </linearGradient>
    </defs>

    <template v-if="isMajor">
      <g v-if="card.id === 0">
        <path d="M110 54 L118 72 L138 74 L124 88 L128 108 L110 98 L92 108 L96 88 L82 74 L102 72 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.4"/>
        <path d="M110 110 Q126 146 158 164 Q126 182 110 216 Q94 182 62 164 Q94 146 110 110 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 1">
        <circle cx="110" cy="102" r="22" fill="none" stroke="url(#glyphGlow)" stroke-width="1.3"/>
        <path d="M74 164 H146 M92 146 L128 182 M128 146 L92 182" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 2">
        <circle cx="110" cy="90" r="18" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M82 126 V202 M138 126 V202 M82 202 H138" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 3">
        <path d="M80 94 Q110 58 140 94 Q140 134 110 162 Q80 134 80 94 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.3"/>
        <path d="M90 182 Q110 168 130 182" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 4">
        <rect x="78" y="78" width="64" height="64" rx="12" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M94 174 H126 M110 142 V214" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 5">
        <path d="M82 82 H138 V128 H82 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M110 128 V214 M88 168 H132" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 6">
        <path d="M90 96 Q90 74 110 74 Q130 74 130 96 Q130 118 110 136 Q90 118 90 96 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M74 176 Q110 142 146 176" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 7">
        <path d="M72 164 H148" fill="none" stroke="url(#glyphGlow)" stroke-width="1.3"/>
        <path d="M110 80 L146 164 L110 248 L74 164 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 8">
        <path d="M94 96 Q110 74 126 96 Q126 118 110 136 Q94 118 94 96 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M86 186 Q110 154 134 186 Q134 214 110 236 Q86 214 86 186 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 9">
        <path d="M110 66 L128 102 L110 138 L92 102 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M110 138 V226" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 10">
        <circle cx="110" cy="160" r="44" fill="none" stroke="url(#glyphGlow)" stroke-width="1.3"/>
        <path d="M110 116 V204 M66 160 H154" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 11">
        <path d="M84 90 H136 M92 90 V214 M128 90 V214 M84 214 H136" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <circle cx="110" cy="152" r="18" fill="none" stroke="url(#glyphGlow)" stroke-width="1.1"/>
      </g>
      <g v-else-if="card.id === 12">
        <path d="M82 82 H138 M92 82 V122 Q92 152 110 172 Q128 152 128 122 V82" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <circle cx="110" cy="194" r="20" fill="none" stroke="url(#glyphGlow)" stroke-width="1.1"/>
      </g>
      <g v-else-if="card.id === 13">
        <path d="M110 72 L132 98 L110 124 L88 98 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M88 164 Q110 140 132 164 Q110 206 88 164 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 14">
        <path d="M82 104 Q110 76 138 104 Q110 132 82 160 Q110 188 138 216" fill="none" stroke="url(#glyphGlow)" stroke-width="1.3"/>
      </g>
      <g v-else-if="card.id === 15">
        <path d="M88 94 H132 V138 H88 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M94 170 Q110 150 126 170 Q110 198 94 170 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 16">
        <path d="M110 60 L138 124 L112 124 L142 214" fill="none" stroke="url(#glyphGlow)" stroke-width="1.3"/>
        <path d="M82 214 H146" fill="none" stroke="url(#glyphGlow)" stroke-width="1.1"/>
      </g>
      <g v-else-if="card.id === 17">
        <path d="M110 70 L118 90 L140 92 L122 106 L128 128 L110 116 L92 128 L98 106 L80 92 L102 90 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <circle cx="78" cy="164" r="8" fill="none" stroke="url(#glyphGlow)" stroke-width="1"/>
        <circle cx="142" cy="188" r="10" fill="none" stroke="url(#glyphGlow)" stroke-width="1"/>
      </g>
      <g v-else-if="card.id === 18">
        <path d="M78 114 Q110 74 142 114 Q110 154 78 114 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M84 196 Q110 170 136 196" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else-if="card.id === 19">
        <circle cx="110" cy="116" r="24" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M110 70 V84 M110 148 V162 M64 116 H78 M142 116 H156 M82 88 L92 98 M128 134 L138 144 M128 98 L138 88 M82 144 L92 134" fill="none" stroke="url(#glyphGlow)" stroke-width="1.1"/>
      </g>
      <g v-else-if="card.id === 20">
        <path d="M110 72 V126 M90 102 H130" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
        <path d="M78 182 Q110 148 142 182 Q110 216 78 182 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
      <g v-else>
        <circle cx="110" cy="160" r="56" fill="none" stroke="url(#glyphGlow)" stroke-width="1.3"/>
        <path d="M110 104 L146 160 L110 216 L74 160 Z" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2"/>
      </g>
    </template>

    <template v-else>
      <g>
        <path :d="suitMarkup.top" fill="none" stroke="url(#glyphGlow)" stroke-width="1.5" />
        <path :d="suitMarkup.mid" fill="none" stroke="url(#glyphGlow)" stroke-width="1.4" />
        <path :d="suitMarkup.side1" fill="none" stroke="url(#glyphGlow)" stroke-width="1.2" />
        <path :d="suitMarkup.side2" fill="none" stroke="url(#glyphGlow)" stroke-width="1.1" />
      </g>
    </template>
  </svg>
</template>
