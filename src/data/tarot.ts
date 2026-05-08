export type SpreadMode = 'single' | 'triple';

export interface TarotMeaning {
  theme: string;
  love: string;
  career: string;
  advice: string;
}

export interface TarotCard {
  id: number;
  nameZh: string;
  nameEn: string;
  arcana: string;
  suit?: string;
  element?: string;
  rank?: string;
  keywords: string[];
  upright: TarotMeaning;
  reversed: TarotMeaning;
}

export interface DrawnCard extends TarotCard {
  reversedFlag: boolean;
}

export const spreadLabels: Record<SpreadMode, string[]> = {
  single: ['此刻指引'],
  triple: ['过去', '现在', '未来']
};

const majorArcana: TarotCard[] = [
  {
    id: 0,
    nameZh: '愚者',
    nameEn: 'The Fool',
    arcana: '大阿尔卡那',
    keywords: ['开始', '自由', '冒险'],
    upright: {
      theme: '新的阶段已经打开，先迈步比先完美更重要。',
      love: '关系里适合真诚表达与重新认识彼此，单身者容易迎来轻松的新连接。',
      career: '适合尝试新岗位、新项目或新方向，但要保留基本的风险意识。',
      advice: '大胆开始，同时确认你的底线和可承受范围。'
    },
    reversed: {
      theme: '冲动、逃避或不切实际的乐观，会让你忽略关键细节。',
      love: '感情里可能出现不成熟承诺，先看行动而不是只听感觉。',
      career: '贸然跳进陌生局面容易踩坑，先补上信息差再行动。',
      advice: '不是不能开始，而是不要把鲁莽误当成勇敢。'
    }
  },
  {
    id: 1,
    nameZh: '魔术师',
    nameEn: 'The Magician',
    arcana: '大阿尔卡那',
    keywords: ['行动', '资源', '创造'],
    upright: {
      theme: '资源、能力与时机都在逐渐到位，重点是你是否愿意动手。',
      love: '你有机会主动推动关系进展，沟通与表达会明显改变氛围。',
      career: '适合提案、谈判、展示能力或启动个人主导的项目。',
      advice: '把想法收束成具体动作，执行会比设想更有力量。'
    },
    reversed: {
      theme: '能量被分散，或者你在用技巧掩盖执行不足。',
      love: '甜言蜜语可能多于实际投入，关系里要警惕操控和误导。',
      career: '避免只做表面推进，真正的短板在落实与持续交付。',
      advice: '回到事实、数据与结果，不要沉迷于“看起来很会”。'
    }
  },
  {
    id: 2,
    nameZh: '女祭司',
    nameEn: 'The High Priestess',
    arcana: '大阿尔卡那',
    keywords: ['直觉', '洞察', '沉静'],
    upright: {
      theme: '很多答案已经在内心成形，只是需要安静地听见它。',
      love: '感情里不必急着给结论，先观察真实情绪与潜在动机。',
      career: '适合研究、整理信息、幕后策划和等待更完整的判断依据。',
      advice: '先感受，再发言；先观察，再决定。'
    },
    reversed: {
      theme: '直觉被压抑或信息被遮蔽，容易在模糊中误判。',
      love: '隐瞒、误会或情绪闭塞正在拉开距离，需要更坦诚的交流。',
      career: '别在信息不对称时仓促拍板，先补齐关键事实。',
      advice: '你需要的不是更多噪音，而是更真实的内在感知。'
    }
  },
  {
    id: 3,
    nameZh: '皇后',
    nameEn: 'The Empress',
    arcana: '大阿尔卡那',
    keywords: ['丰盛', '滋养', '吸引'],
    upright: {
      theme: '这是滋养与生长的阶段，关系、创意和成果都在发芽。',
      love: '关系里更适合表达关心、陪伴与柔软，温度会带来连接。',
      career: '创意、审美、内容、品牌或与人相关的工作更容易开花结果。',
      advice: '先让能量流动起来，别用过度克制截断你的生命力。'
    },
    reversed: {
      theme: '付出失衡或过度依赖，让原本丰盛的状态变成消耗。',
      love: '感情里可能一方照顾过头，另一方却并未真正回应。',
      career: '注意边界与精力管理，别让情绪劳动吞掉你的产出。',
      advice: '滋养别人之前，先确认自己没有被耗空。'
    }
  },
  {
    id: 4,
    nameZh: '皇帝',
    nameEn: 'The Emperor',
    arcana: '大阿尔卡那',
    keywords: ['秩序', '掌控', '责任'],
    upright: {
      theme: '局面需要结构、规则和清晰边界，稳定来自有序推进。',
      love: '关系里需要更成熟可靠的承担，而不只是情绪表达。',
      career: '适合做管理、搭框架、定目标、控节奏和推动落地。',
      advice: '明确规则、明确责任、明确下一步。'
    },
    reversed: {
      theme: '控制欲过强或秩序失灵，都会让关系与局面变得僵硬。',
      love: '别把亲密关系经营成服从关系，强压只会带来反弹。',
      career: '管理问题可能比执行问题更大，先修正方式而不是只加力度。',
      advice: '真正的稳定不是控制一切，而是让系统能自洽运转。'
    }
  },
  {
    id: 5,
    nameZh: '教皇',
    nameEn: 'The Hierophant',
    arcana: '大阿尔卡那',
    keywords: ['传统', '规则', '学习'],
    upright: {
      theme: '成熟经验、可靠方法与长期主义，会比临时聪明更有效。',
      love: '关系可能往更正式、更稳定的方向走，价值观匹配很重要。',
      career: '适合学习、考证、找导师、进入成熟体系或按流程做事。',
      advice: '先站稳基本盘，再决定是否突破传统。'
    },
    reversed: {
      theme: '旧规则正在失去适配性，你需要自己的判断而非盲从。',
      love: '不要为了符合期待而忽视真实需求，形式不能代替共识。',
      career: '流程、制度或权威未必永远正确，允许自己提出新做法。',
      advice: '尊重经验，但别把经验奉为唯一答案。'
    }
  },
  {
    id: 6,
    nameZh: '恋人',
    nameEn: 'The Lovers',
    arcana: '大阿尔卡那',
    keywords: ['选择', '关系', '一致'],
    upright: {
      theme: '真正重要的不是表面选项，而是你是否与内在价值一致。',
      love: '感情里适合深入确认彼此立场、需求与承诺，关系更容易推进。',
      career: '合作、签约与重要选择都需要价值观和目标一致。',
      advice: '别只问“哪个好”，先问“哪个更像真实的我”。'
    },
    reversed: {
      theme: '关系里的不一致、摇摆或逃避选择，会拖慢一切进展。',
      love: '暧昧、犹豫或沟通错位正在制造不安全感。',
      career: '合作前先谈清权责和预期，别把问题留到后面爆发。',
      advice: '拖延做决定，本身也是一种决定。'
    }
  },
  {
    id: 7,
    nameZh: '战车',
    nameEn: 'The Chariot',
    arcana: '大阿尔卡那',
    keywords: ['推进', '意志', '胜利'],
    upright: {
      theme: '方向一旦清晰，你的执行力会迅速拉开差距。',
      love: '关系需要主动推进，不要总等对方先表态。',
      career: '适合冲目标、抢节奏、做突破，你会在行动中赢得优势。',
      advice: '聚焦一个方向，把分散的能量拧成一股绳。'
    },
    reversed: {
      theme: '节奏失控或方向混乱，会让努力变成白耗。',
      love: '情绪对冲或彼此较劲，容易让关系进入拉扯状态。',
      career: '先修正路线与优先级，再继续加速。',
      advice: '不是不够努力，而是需要重新校准。'
    }
  },
  {
    id: 8,
    nameZh: '力量',
    nameEn: 'Strength',
    arcana: '大阿尔卡那',
    keywords: ['韧性', '稳定', '温和'],
    upright: {
      theme: '真正的强大来自稳定和自控，而不是用力压制。',
      love: '关系里越能温和处理冲突，越容易建立深层信任。',
      career: '面对压力时，你的耐心与持续性会成为核心优势。',
      advice: '先稳住自己，再影响局面。'
    },
    reversed: {
      theme: '焦虑、内耗或信心不足正在削弱你本来就有的力量。',
      love: '敏感或不安可能让你过度反应，先安顿自己再回应对方。',
      career: '别把疲惫误认成无能，很多问题只是能量透支。',
      advice: '恢复节奏、睡眠和情绪容量，力量会回来。'
    }
  },
  {
    id: 9,
    nameZh: '隐者',
    nameEn: 'The Hermit',
    arcana: '大阿尔卡那',
    keywords: ['独处', '思考', '寻找'],
    upright: {
      theme: '退一步不是逃避，而是在为更准确的判断留空间。',
      love: '关系里需要独立思考与情绪沉淀，别急着被外界意见带走。',
      career: '适合复盘、研究、沉淀经验，深度比热闹更重要。',
      advice: '把注意力从外部评价收回来，听听你真正认同什么。'
    },
    reversed: {
      theme: '封闭过度会让你失去必要的连接与反馈。',
      love: '沉默太久会让误会加深，适时沟通比独自消化更有效。',
      career: '不要把闭门思考拖成停滞，必要时找人校准视角。',
      advice: '独处是为了看清，而不是把自己隔绝。'
    }
  },
  {
    id: 10,
    nameZh: '命运之轮',
    nameEn: 'Wheel of Fortune',
    arcana: '大阿尔卡那',
    keywords: ['转机', '循环', '变化'],
    upright: {
      theme: '趋势正在转动，你要做的是识别风向并顺势调整。',
      love: '关系进入转折期，新的机会或新的相处方式正在出现。',
      career: '有利于抓住窗口期、行业波动或外部变化带来的机会。',
      advice: '别死守旧节奏，灵活的人更容易接住运气。'
    },
    reversed: {
      theme: '阶段性卡顿会让你怀疑时机，但局面未必真的停了。',
      love: '重复问题反复出现，说明旧模式需要真正被打破。',
      career: '别把暂时不顺当成长期失败，耐心看完整个周期。',
      advice: '逆风时先稳住基本盘，等待下一次转动。'
    }
  },
  {
    id: 11,
    nameZh: '正义',
    nameEn: 'Justice',
    arcana: '大阿尔卡那',
    keywords: ['平衡', '因果', '判断'],
    upright: {
      theme: '结果会忠实反映你此前的选择与投入。',
      love: '关系里需要公平、边界和诚实，否则迟早失衡。',
      career: '合同、规则、评估与结果导向事务会被放大。',
      advice: '先对自己诚实，再期待外界给你公平。'
    },
    reversed: {
      theme: '偏见、拖延或不愿承担后果，会让问题继续累积。',
      love: '谁都觉得自己委屈时，通常说明沟通与责任分配有问题。',
      career: '别回避该面对的评估、规则或补救动作。',
      advice: '你越晚纠偏，代价就越高。'
    }
  },
  {
    id: 12,
    nameZh: '倒吊人',
    nameEn: 'The Hanged Man',
    arcana: '大阿尔卡那',
    keywords: ['停顿', '换位', '放下'],
    upright: {
      theme: '暂停不是浪费，而是为了换一个视角看清局面。',
      love: '关系里先别急着争对错，尝试站到对方位置理解一次。',
      career: '项目可能需要等待、调整或牺牲一部分短期收益换长期空间。',
      advice: '接受暂时停住，很多答案在“放下控制”后才会出现。'
    },
    reversed: {
      theme: '明知该放却不放，会把过渡期拖成消耗期。',
      love: '关系里可能卡在僵局，谁都不肯先改变。',
      career: '一味等待不会自动带来转机，必要时主动做出取舍。',
      advice: '停止无意义的悬置，决定本身就是解法的一部分。'
    }
  },
  {
    id: 13,
    nameZh: '死神',
    nameEn: 'Death',
    arcana: '大阿尔卡那',
    keywords: ['结束', '蜕变', '更新'],
    upright: {
      theme: '一个阶段正在自然结束，结束本身是在为更新腾位置。',
      love: '关系模式需要彻底改变，旧问题不能只靠表面修补。',
      career: '适合断舍离旧项目、旧身份或低效做法，进入新周期。',
      advice: '别只盯着失去，也看看你正在为自己腾出什么。'
    },
    reversed: {
      theme: '对变化的抗拒会延长阵痛，让本该结束的事情继续耗你。',
      love: '害怕失去可能让你抓住已经不适合的关系模式。',
      career: '旧路径明显走不动了，还在原地硬撑只会更累。',
      advice: '放手不是否定过去，而是允许未来出现。'
    }
  },
  {
    id: 14,
    nameZh: '节制',
    nameEn: 'Temperance',
    arcana: '大阿尔卡那',
    keywords: ['调和', '恢复', '节奏'],
    upright: {
      theme: '局势适合通过微调、整合与耐心恢复到更稳的状态。',
      love: '关系中的磨合正在变得有效，柔和沟通比强推更有用。',
      career: '跨团队协作、流程整合与长期推进会比短线爆发更好。',
      advice: '不要走极端，让节奏稳下来。'
    },
    reversed: {
      theme: '失衡、过度或急躁，会让本来可修复的局面继续偏离。',
      love: '情绪起伏大或沟通方式过激，容易破坏原本的缓和空间。',
      career: '不要同时拉太多线，过载会拖累整体质量。',
      advice: '适当收一点，才能真正走得更远。'
    }
  },
  {
    id: 15,
    nameZh: '恶魔',
    nameEn: 'The Devil',
    arcana: '大阿尔卡那',
    keywords: ['执念', '欲望', '束缚'],
    upright: {
      theme: '你已经看见问题的诱惑与束缚，它对你的控制开始可被识别。',
      love: '关系里可能有占有、依赖、沉迷或难以割舍的模式。',
      career: '短期利益、虚荣或惯性可能让你偏离真正想走的方向。',
      advice: '承认执念的存在，是解除它的第一步。'
    },
    reversed: {
      theme: '束缚正在松动，你已经有机会从消耗性模式里抽身。',
      love: '关系里适合减少控制与依赖，让彼此回到更健康的位置。',
      career: '逐步脱离内耗环境或低质量目标，会让你重新轻起来。',
      advice: '别再为旧枷锁找理由，你已经知道该离开什么。'
    }
  },
  {
    id: 16,
    nameZh: '高塔',
    nameEn: 'The Tower',
    arcana: '大阿尔卡那',
    keywords: ['突变', '真相', '重建'],
    upright: {
      theme: '结构性问题被击穿，虽然震荡，但真相会让重建更干净。',
      love: '关系里隐藏的问题可能突然爆发，但这也迫使双方面对真实。',
      career: '旧计划、旧认知或旧系统可能被打破，需要快速调整。',
      advice: '别只害怕崩塌，真正值得珍惜的东西会在震荡后留下。'
    },
    reversed: {
      theme: '你已经察觉裂缝，却还在回避真正的重整。',
      love: '拖着不谈的问题会继续侵蚀信任，主动面对反而更有利。',
      career: '若早知系统有问题，就别再假装一切正常。',
      advice: '及早拆除危险结构，比等它自己塌掉更明智。'
    }
  },
  {
    id: 17,
    nameZh: '星星',
    nameEn: 'The Star',
    arcana: '大阿尔卡那',
    keywords: ['希望', '疗愈', '信心'],
    upright: {
      theme: '希望感和修复力正在回流，局面虽然未完全结束，但已经见光。',
      love: '感情里更适合温和、坦诚与慢慢建立安全感。',
      career: '适合恢复信心、重启创意、修复受挫后的状态。',
      advice: '允许自己重新相信，好转通常先从心态开始。'
    },
    reversed: {
      theme: '信心被消耗时，容易觉得什么都没有意义。',
      love: '关系里若总在失望中循环，需要先修复自己的期待与边界。',
      career: '疲惫让你低估了未来可能性，不要用暂时低谷定义全局。',
      advice: '先做能让自己恢复一点能量的小事。'
    }
  },
  {
    id: 18,
    nameZh: '月亮',
    nameEn: 'The Moon',
    arcana: '大阿尔卡那',
    keywords: ['迷雾', '情绪', '潜意识'],
    upright: {
      theme: '局势尚未完全明朗，情绪、投射和未说出的东西都在起作用。',
      love: '感情里容易多想、误读或被不安全感牵引，先确认事实。',
      career: '项目中可能有隐藏变量，适合继续摸底，不宜过早定论。',
      advice: '不要急着追求确定，先提升辨别力。'
    },
    reversed: {
      theme: '迷雾开始散去，但清晰往往伴随不那么舒服的真相。',
      love: '误会有机会被说开，但你也要愿意面对真实感受。',
      career: '信息逐渐完整，适合把之前模糊的问题逐一落实。',
      advice: '清醒不是轻松，但它会带你走出反复。'
    }
  },
  {
    id: 19,
    nameZh: '太阳',
    nameEn: 'The Sun',
    arcana: '大阿尔卡那',
    keywords: ['明朗', '活力', '成功'],
    upright: {
      theme: '能见度、行动力与积极结果都在上升，是非常有力的一张牌。',
      love: '关系更适合坦率、公开和正面互动，彼此状态更容易同步。',
      career: '适合展示成果、争取机会、扩大影响，你会被看见。',
      advice: '主动一点，把光打出去。'
    },
    reversed: {
      theme: '好事并未消失，只是被疲惫、迟疑或短暂阴影遮住。',
      love: '关系里有温度，但可能缺少足够直接的表达。',
      career: '成果在，只是放大和落地程度还不够。',
      advice: '减少自我打折，别把本来有的光收回去。'
    }
  },
  {
    id: 20,
    nameZh: '审判',
    nameEn: 'Judgement',
    arcana: '大阿尔卡那',
    keywords: ['觉醒', '召唤', '决定'],
    upright: {
      theme: '过去的经验正在汇聚成一次清醒的召唤，让你做出真正关键的决定。',
      love: '旧关系、旧议题或旧感受可能回到面前，等待你完成一次成熟选择。',
      career: '适合复盘后做升级决策，进入更高一层的定位与责任。',
      advice: '不要再假装没听见内心真正的声音。'
    },
    reversed: {
      theme: '你知道该改变什么，却还在犹豫是否彻底面对。',
      love: '反复回头看并不会自动修复问题，关键是做出清晰判断。',
      career: '拖延升级、转型或止损，只会让旧问题继续拖住你。',
      advice: '别再等待“绝对确定”，很多决定本来就要边走边确认。'
    }
  },
  {
    id: 21,
    nameZh: '世界',
    nameEn: 'The World',
    arcana: '大阿尔卡那',
    keywords: ['完成', '整合', '圆满'],
    upright: {
      theme: '一个阶段趋于完整，你可以把经验整合成新的起点。',
      love: '关系里更容易达成成熟共识，或完成一个重要阶段。',
      career: '适合收尾、交付、总结成果，也适合开启更大平台的新周期。',
      advice: '先肯定已经完成的部分，再进入下一轮。'
    },
    reversed: {
      theme: '离完成只差一步时，最容易因为分心或疲惫而停住。',
      love: '关系其实有机会成熟，但还需要最后的坦诚和收束。',
      career: '别在收尾阶段松劲，真正的价值常常体现在最后一公里。',
      advice: '把闭环做完整，你会轻很多。'
    }
  }
];

const suitDefinitions = [
  {
    suitZh: '权杖',
    suitEn: 'Wands',
    element: '火元素',
    arcana: '小阿尔卡那',
    suitKeywords: ['行动', '热情', '驱动力'],
    uprightTheme: '行动力、热情与主动创造的能量正在被点燃。',
    reversedTheme: '冲动、分散或精力透支，让行动难以稳定落地。',
    loveTone: '感情里更强调吸引力、主动性和彼此的投入热度。',
    careerTone: '事业上适合推进、发起、竞争、开拓和做出存在感。',
    adviceTone: '把火力用在最重要的事情上，不要四处点燃却没有主线。'
  },
  {
    suitZh: '圣杯',
    suitEn: 'Cups',
    element: '水元素',
    arcana: '小阿尔卡那',
    suitKeywords: ['情感', '关系', '直觉'],
    uprightTheme: '情绪流动、关系连接和内在感受成为主题。',
    reversedTheme: '情感积压、敏感失衡或逃避真实感受正在放大问题。',
    loveTone: '感情议题被明显放大，安全感、表达与共鸣尤其关键。',
    careerTone: '工作里的人际协作、情绪能量与创造感受会影响结果。',
    adviceTone: '尊重感受，但别让感受替代全部判断。'
  },
  {
    suitZh: '宝剑',
    suitEn: 'Swords',
    element: '风元素',
    arcana: '小阿尔卡那',
    suitKeywords: ['思维', '判断', '沟通'],
    uprightTheme: '逻辑、判断、沟通与决断力正在主导局面。',
    reversedTheme: '焦虑、误判或沟通偏差，会让问题在头脑层面反复扩大。',
    loveTone: '感情里需要更清晰的表达、边界与事实对齐。',
    careerTone: '工作上适合分析、谈判、决策、拆解问题与快速纠偏。',
    adviceTone: '清晰很重要，但不要把锋利变成伤人或伤己。'
  },
  {
    suitZh: '星币',
    suitEn: 'Pentacles',
    element: '土元素',
    arcana: '小阿尔卡那',
    suitKeywords: ['现实', '资源', '积累'],
    uprightTheme: '现实基础、资源管理与长期积累正在成为重点。',
    reversedTheme: '拖延、匮乏焦虑或资源分配失衡，会影响稳定感。',
    loveTone: '感情里会更看重实际投入、长期可靠性与现实支持。',
    careerTone: '事业财务、执行质量、耐心积累和结果兑现被重点关注。',
    adviceTone: '把抽象目标落到时间、金钱、体力与习惯上。'
  }
] as const;

const rankDefinitions = [
  {
    rank: 'Ace',
    nameZh: '一',
    nameEn: 'Ace',
    keywords: ['起点', '种子', '可能'],
    upright: {
      theme: '新的机会刚刚冒头，虽然还小，但方向很关键。',
      love: '一段新关系、新感受或一次新的靠近开始出现。',
      career: '适合启动、申请、立项或给项目点第一把火。',
      advice: '先让开始发生，再决定如何做大。'
    },
    reversed: {
      theme: '机会并非没有，而是还没被你真正接住。',
      love: '感情里可能有心动，但表达和承接不足。',
      career: '想法很多，真正落地的第一步却还没完成。',
      advice: '把起点从脑海拿到现实中。'
    }
  },
  {
    rank: 'Two',
    nameZh: '二',
    nameEn: 'Two',
    keywords: ['平衡', '选择', '互动'],
    upright: {
      theme: '关系、选择与配合成为当前重点。',
      love: '彼此回应与互动质量直接决定关系走向。',
      career: '协作、双线任务或方案选择需要更好的平衡。',
      advice: '先处理好你与“另一端”的关系。'
    },
    reversed: {
      theme: '拉扯、犹豫或不平衡会让推进效率下降。',
      love: '关系里的冷热不均会让安全感下降。',
      career: '多线并行失衡，优先级需要重新梳理。',
      advice: '失衡时不要硬撑，先减法。'
    }
  },
  {
    rank: 'Three',
    nameZh: '三',
    nameEn: 'Three',
    keywords: ['扩展', '合作', '成长'],
    upright: {
      theme: '事情开始向外扩展，合作与成长空间变大。',
      love: '关系更需要共同体验、共同建设或进入更开放的阶段。',
      career: '团队协作、资源连接和阶段性成果会更明显。',
      advice: '适合把个人能量接入更大的结构。'
    },
    reversed: {
      theme: '合作偏差或成长停滞，会让本来的扩展受阻。',
      love: '第三方因素或配合失调可能影响关系稳定。',
      career: '协作链条不顺时，先修接口而不是只催结果。',
      advice: '扩张之前，先确保配合机制可用。'
    }
  },
  {
    rank: 'Four',
    nameZh: '四',
    nameEn: 'Four',
    keywords: ['稳定', '停留', '结构'],
    upright: {
      theme: '当前更强调稳定、巩固和守住已有成果。',
      love: '关系里需要安全感、规律和可预期的陪伴。',
      career: '适合打基础、稳流程、保质量和管理资源。',
      advice: '先稳住，再求更大变化。'
    },
    reversed: {
      theme: '过度停留或表面稳定，可能正在掩盖真正问题。',
      love: '关系看似平静，实际可能缺少流动与新鲜感。',
      career: '守成过头会错过更好的调整窗口。',
      advice: '稳定不是僵住，必要时要让结构呼吸。'
    }
  },
  {
    rank: 'Five',
    nameZh: '五',
    nameEn: 'Five',
    keywords: ['冲突', '波动', '挑战'],
    upright: {
      theme: '摩擦和波动正在逼你看清真正的问题所在。',
      love: '关系里可能出现争执、误会或期待差异。',
      career: '竞争、资源争夺或压力测试会被放大。',
      advice: '别只怕冲突，很多升级都从不舒服开始。'
    },
    reversed: {
      theme: '冲突可能被压着不谈，或反复消耗却没有解决。',
      love: '冷战、逃避或委屈积累会比直接争吵更伤。',
      career: '问题没有正面处理时，团队摩擦会转入暗处。',
      advice: '把无效对抗变成有效处理。'
    }
  },
  {
    rank: 'Six',
    nameZh: '六',
    nameEn: 'Six',
    keywords: ['调整', '过渡', '回暖'],
    upright: {
      theme: '局势开始从紧张转向修复，过渡正在发生。',
      love: '关系有机会和缓、回暖，或走入更平衡的互动。',
      career: '适合复盘后优化推进，逐步从混乱转向可控。',
      advice: '继续往更轻、更顺的方向走。'
    },
    reversed: {
      theme: '过渡不彻底，旧问题还在拉住你。',
      love: '关系容易停在“看似好一些”却没真正修复的位置。',
      career: '表面调整后仍有历史包袱，需要继续清理。',
      advice: '不要只求暂时舒服，要追求真正转变。'
    }
  },
  {
    rank: 'Seven',
    nameZh: '七',
    nameEn: 'Seven',
    keywords: ['策略', '试探', '考验'],
    upright: {
      theme: '你需要更聪明地应对，而不是一味硬碰硬。',
      love: '感情里存在观察、试探或想确认对方真实意图的倾向。',
      career: '适合制定策略、评估风险与选择更高效的方法。',
      advice: '先判断局面，再决定出手方式。'
    },
    reversed: {
      theme: '策略失真、顾虑过多或小聪明过头，都可能反噬自己。',
      love: '过度试探会消耗信任，坦诚往往更高效。',
      career: '若总在绕路，可能说明你没有正面解决核心问题。',
      advice: '别把谨慎走成犹疑。'
    }
  },
  {
    rank: 'Eight',
    nameZh: '八',
    nameEn: 'Eight',
    keywords: ['推进', '专注', '强化'],
    upright: {
      theme: '事情进入加速或深化阶段，关键在持续投入。',
      love: '关系里要么快速靠近，要么需要更深层次的投入与经营。',
      career: '适合专注打磨、提速执行和持续优化结果。',
      advice: '把注意力收回来，持续做对的事。'
    },
    reversed: {
      theme: '推进受阻、专注不足或压力过载，会削弱原本的势能。',
      love: '关系可能因为距离、节奏不一致或投入失衡而卡住。',
      career: '效率问题往往不在能力，而在分心和负载。',
      advice: '减掉杂音，把关键动作做扎实。'
    }
  },
  {
    rank: 'Nine',
    nameZh: '九',
    nameEn: 'Nine',
    keywords: ['临界点', '成熟', '收束'],
    upright: {
      theme: '你已经接近某个阶段的完成点，成果与压力并存。',
      love: '关系里会更在意真实质量，而不只是表面是否在一起。',
      career: '项目接近成熟，最后的质量与耐力尤其关键。',
      advice: '坚持到最后一段路，但别忽略自己的状态。'
    },
    reversed: {
      theme: '临门一脚前的焦虑、疲惫或自我怀疑容易放大。',
      love: '关系里的不安在收尾阶段更明显，需要被说开。',
      career: '最后阶段常见的不是不会做，而是精神负担太重。',
      advice: '先处理恐惧，再处理任务。'
    }
  },
  {
    rank: 'Ten',
    nameZh: '十',
    nameEn: 'Ten',
    keywords: ['完成', '结果', '阶段终点'],
    upright: {
      theme: '某个周期走到结果位，得到的同时也意味着下一轮将开启。',
      love: '关系进入阶段结果，可能是稳定、承诺，也可能是完成一次课题。',
      career: '成果、责任和收尾任务都会集中显现。',
      advice: '接受结果，然后决定下一阶段如何继续。'
    },
    reversed: {
      theme: '结果带来的负担、尾声里的拖累或不愿结束会延长压力。',
      love: '关系中的包袱若不释放，再稳定也会变沉重。',
      career: '项目快结束时最容易背太多，注意及时卸载。',
      advice: '完成不等于继续硬扛，把该放下的放下。'
    }
  },
  {
    rank: 'Page',
    nameZh: '侍从',
    nameEn: 'Page',
    keywords: ['学习', '消息', '萌芽'],
    upright: {
      theme: '新讯息、新兴趣或新的学习曲线正在展开。',
      love: '感情里有试探性的接近、表达或重新开启对话的机会。',
      career: '适合学习新技能、接收新任务或从小处切入新方向。',
      advice: '保持好奇，先成为愿意学习的人。'
    },
    reversed: {
      theme: '稚嫩、拖延或理解偏差，会让新机会停在表层。',
      love: '表达不成熟或消息反复，会让关系读不清方向。',
      career: '别只停在感兴趣，真正进步需要持续练习。',
      advice: '把“我想学”变成稳定输入。'
    }
  },
  {
    rank: 'Knight',
    nameZh: '骑士',
    nameEn: 'Knight',
    keywords: ['行动', '冲锋', '执行'],
    upright: {
      theme: '事情开始真正动起来，行动与推进欲都很强。',
      love: '关系里有明显靠近、追求或推进节奏的倾向。',
      career: '适合冲刺、攻坚、推进任务和把计划带上路。',
      advice: '行动是对的，但要确保方向也是对的。'
    },
    reversed: {
      theme: '用力过猛、节奏失衡或行动反复，会削弱推进效果。',
      love: '感情里可能忽冷忽热，或出现一时热烈但后劲不足。',
      career: '冲得快不代表走得远，执行要配合判断。',
      advice: '减掉躁劲，保留行动力。'
    }
  },
  {
    rank: 'Queen',
    nameZh: '皇后',
    nameEn: 'Queen',
    keywords: ['成熟', '接纳', '稳定掌控'],
    upright: {
      theme: '你正在以更成熟、细腻和稳定的方式掌控局面。',
      love: '关系里更适合共情、理解与有边界的照顾。',
      career: '适合用经验、判断与整合能力稳住复杂情境。',
      advice: '柔软不是退让，而是一种更高级的掌控。'
    },
    reversed: {
      theme: '情绪过载、过度保护或过度控制，会让成熟感失真。',
      love: '感情里别把关心做成绑缚，也别把委屈藏太深。',
      career: '你可能背了太多情绪劳动，需要重新划边界。',
      advice: '把能量先还给自己，再谈照顾别人。'
    }
  },
  {
    rank: 'King',
    nameZh: '国王',
    nameEn: 'King',
    keywords: ['权威', '定力', '统筹'],
    upright: {
      theme: '这是成熟决策与稳定统筹的位置，适合站到更高视角。',
      love: '关系里需要更可靠的承担、承诺和清晰表达。',
      career: '适合管理、拍板、承担责任和整合资源。',
      advice: '站稳你的主位，用成熟而非强硬带动局面。'
    },
    reversed: {
      theme: '专断、失控或责任感下降，会让权威变成压力来源。',
      love: '关系里若只有控制没有理解，稳定只是表面。',
      career: '管理失衡、判断武断或逃避责任都会影响整体信任。',
      advice: '真正的领导力来自稳定与担当，不来自压制。'
    }
  }
] as const;

function combineKeywords(
  rankKeywords: readonly string[],
  suitKeywords: readonly string[]
): string[] {
  return [...rankKeywords, ...suitKeywords].slice(0, 4);
}

function createMinorArcana(startId: number): TarotCard[] {
  const deck: TarotCard[] = [];
  let currentId = startId;

  for (const suit of suitDefinitions) {
    for (const rank of rankDefinitions) {
      deck.push({
        id: currentId,
        nameZh: `${suit.suitZh}${rank.nameZh}`,
        nameEn: `${rank.nameEn} of ${suit.suitEn}`,
        arcana: suit.arcana,
        suit: suit.suitZh,
        element: suit.element,
        rank: rank.rank,
        keywords: combineKeywords(rank.keywords, suit.suitKeywords),
        upright: {
          theme: `${rank.upright.theme}${suit.uprightTheme}`,
          love: `${rank.upright.love}${suit.loveTone}`,
          career: `${rank.upright.career}${suit.careerTone}`,
          advice: `${rank.upright.advice}${suit.adviceTone}`
        },
        reversed: {
          theme: `${rank.reversed.theme}${suit.reversedTheme}`,
          love: `${rank.reversed.love}${suit.loveTone}`,
          career: `${rank.reversed.career}${suit.careerTone}`,
          advice: `${rank.reversed.advice}${suit.adviceTone}`
        }
      });
      currentId += 1;
    }
  }

  return deck;
}

export const tarotDeck: TarotCard[] = [
  ...majorArcana,
  ...createMinorArcana(majorArcana.length)
];
