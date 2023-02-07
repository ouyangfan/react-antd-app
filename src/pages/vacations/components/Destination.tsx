import React from 'react'
import styles from '../index.module.less'

const destinationList = [
  {
    category: '热门推荐',
    items: [
      { name: '三亚', link: '' },
      { name: '苏州', link: '' },
      { name: '丽江', link: '' },
      { name: '西双版纳', link: '' },
      { name: '上海', link: '' },
      { name: '成都', link: '' },
      { name: '杭州', link: '' },
      { name: '昆明', link: '' },
    ],
  },
  {
    category: '海南/福建',
    items: [
      { name: '三亚', link: '' },
      { name: '厦门', link: '' },
      { name: '海口', link: '' },
      { name: '霞浦', link: '' },
      { name: '武夷山', link: '' },
      { name: '万宁', link: '' },
      { name: '福州', link: '' },
      { name: '鼓浪屿', link: '' },
    ],
  },
  {
    category: '云南/贵州',
    items: [
      { name: '丽江', link: '' },
      { name: '西双版纳', link: '' },
      { name: '昆明', link: '' },
      { name: '贵阳', link: '' },
      { name: '香格里拉', link: '' },
      { name: '腾冲', link: '' },
    ],
  },
  {
    category: '大西北/内蒙古',
    items: [
      { name: '西安', link: '' },
      { name: '乌鲁木齐', link: '' },
      { name: '敦煌', link: '' },
      { name: '西宁', link: '' },
      { name: '呼伦贝尔', link: '' },
      { name: '兰州', link: '' },
      { name: '青海湖', link: '' },
    ],
  },
  {
    category: '广东/广西',
    items: [
      { name: '桂林', link: '' },
      { name: '北海', link: '' },
      { name: '广州', link: '' },
      { name: '涠洲岛', link: '' },
      { name: '南澳', link: '' },
      { name: '深圳', link: '' },
      { name: '惠州', link: '' },
      { name: '珠海', link: '' },
      { name: '南宁', link: '' },
    ],
  },
  {
    category: '四川/重庆/西藏',
    items: [
      { name: '成都', link: '' },
      { name: '重庆', link: '' },
      { name: '九寨沟', link: '' },
      { name: '拉萨', link: '' },
      { name: '稻城', link: '' },
      { name: '四姑娘山', link: '' },
      { name: '林芝', link: '' },
      { name: '色达', link: '' },
    ],
  },
  {
    category: '湖南/湖北/北京',
    items: [
      { name: '北京', link: '' },
      { name: '张家界', link: '' },
      { name: '长沙', link: '' },
      { name: '神农架', link: '' },
      { name: '武汉', link: '' },
      { name: '湘西', link: '' },
      { name: '凤凰', link: '' },
      { name: '宜昌', link: '' },
    ],
  },
  {
    category: '大华东',
    items: [
      { name: '苏州', link: '' },
      { name: '上海', link: '' },
      { name: '杭州', link: '' },
      { name: '安吉', link: '' },
      { name: '黄山', link: '' },
      { name: '普陀山', link: '' },
      { name: '千岛湖', link: '' },
      { name: '南京', link: '' },
    ],
  },
  {
    category: '其他目的地',
    items: [
      { name: '长白山', link: '' },
      { name: '哈尔滨', link: '' },
      { name: '青岛', link: '' },
      { name: '漠河', link: '' },
      { name: '威海', link: '' },
      { name: '庐山', link: '' },
      { name: '大连', link: '' },
      { name: '三清山', link: '' },
    ],
  },
]

interface CardItemProps {
  destination: {
    category: string
    items: any[]
  }
}
const CardItem: React.FC<CardItemProps> = ({ destination }) => {
  return (
    <div className={styles['x-card__item']}>
      <h3 className={styles['x-card__item__h3']}>{destination.category}</h3>
      <p>
        {destination.items.map((item) => (
          <a className="" key={item.name}>
            {item.name}
          </a>
        ))}
      </p>
    </div>
  )
}

const Destination: React.FC = () => {
  return (
    <div className={styles['x-card']}>
      {destinationList.map((destination, index) => (
        <CardItem destination={destination} key={index} />
      ))}
    </div>
  )
}

export default Destination
