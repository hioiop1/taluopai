import { createApp } from 'vue';
import { Alert, Button, Card, Input, Radio, Space, Tag } from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import './style.css';

createApp(App)
  .use(Alert)
  .use(Button)
  .use(Card)
  .use(Input)
  .use(Radio)
  .use(Space)
  .use(Tag)
  .mount('#app');
