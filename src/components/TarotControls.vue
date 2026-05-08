<script setup lang="ts">
import { ReloadOutlined } from '@ant-design/icons-vue';
import type { SpreadMode } from '../data/tarot';

defineProps<{
  question: string;
  spreadMode: SpreadMode;
  isDrawing: boolean;
}>();

const emit = defineEmits<{
  'update:question': [value: string];
  'update:spreadMode': [value: SpreadMode];
  draw: [];
  reset: [];
}>();
</script>

<template>
  <a-card :bordered="false" class="control-card">
    <a-space direction="vertical" size="large" style="width: 100%">
      <div>
        <div class="section-label">将念头放上桌面</div>
        <a-textarea
          :value="question"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          placeholder="例如：这段关系接下来会走向哪里？"
          @update:value="emit('update:question', $event)"
        />
      </div>

      <div>
        <div class="section-label">选择展开方式</div>
        <a-radio-group
          :value="spreadMode"
          button-style="solid"
          @update:value="emit('update:spreadMode', $event)"
        >
          <a-radio-button value="single">一张启示</a-radio-button>
          <a-radio-button value="triple">过去 / 现在 / 将至</a-radio-button>
        </a-radio-group>
      </div>

      <a-space wrap>
        <a-button type="primary" size="large" :loading="isDrawing" @click="emit('draw')">
          {{ isDrawing ? '牌面正在显现...' : '唤起牌面' }}
        </a-button>
        <a-button size="large" @click="emit('reset')">
          <template #icon>
            <ReloadOutlined />
          </template>
          重新归零
        </a-button>
      </a-space>
    </a-space>
  </a-card>
</template>
