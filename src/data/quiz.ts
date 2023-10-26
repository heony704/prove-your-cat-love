type Quiz = {
  contents: string;
  image?: string;
  buttonNum: 1 | 2;
  answer?: boolean;
};

const quiz = [
  {
    contents: '나는 고양이를 사랑한다.',
    buttonNum: 1,
  },
  {
    contents: '지구의 주인은 고양이다.',
    buttonNum: 1,
  },
  {
    contents: '지구의 주인은 인간 따위가 아니다.',
    buttonNum: 1,
  },
  {
    contents:
      '모든 사건의 배후에 고양이가 있으며 지구의 지배자는 고양이이므로 인간은 캔따개로써 고양이에게 충성을 다해야 한다.',
    buttonNum: 1,
  },
  {
    contents:
      '인간 중 열에 아홉은 죽어도 되고, 남은 하나가 죽은 아홉을 통조림으로 만들어서 그 통조림을 고양이에게 바쳐야 한다.',
    buttonNum: 1,
  },
  {
    contents: '나는 고양이를 사랑한다',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '고양이를 만지면 기분이 좋아진다.',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '고양이의 발톱은 총 18개다.',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '고양이의 땀샘은 발바닥에만 있다.',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '고양이는 외로움을 타지 않는다.',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '삼색 고양이는 대부분 암컷 고양이다.',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '삼색 고양이는 대부분 수컷 고양이다.',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '고양이는 개와 달리 까칠까칠한 혀를 가졌다.',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '고양이는 개처럼 미끌미끌한 혀를 가졌다.',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '고양이는 발톱을 감출 수 없다.',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '고양이는 산책이 필요한 동물이다.',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '고양이는 훈련시킬 수 없다.',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '고양이는 하루의 대부분을 잠자고 있다.',
    buttonNum: 2,
    answer: true,
  },
  {
    contents:
      '대부분의 고양이는 인간의 배변 훈련 없이도 화장실을 알아서 잘 간다.',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '이 고양이는 편안한 상태다.',
    image: 'lying_cat',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '이 고양이는 하품하고 있다.',
    image: 'yawning_cat1',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '이 고양이는 하악질하고 있다.',
    image: 'yawning_cat2',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '이 것은 식빵이다.',
    image: 'bread_cat',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '이 것은 고양이다.',
    image: 'rock_cat',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '이 것은 고양이다.',
    image: 'mushroom_cat',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '이 것은 도롱뇽이다.',
    image: 'salamander_cat',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '고양이는 다리가 없는 동물이다.',
    image: 'cat_without_legs',
    buttonNum: 2,
    answer: false,
  },
  {
    contents: '고양이는 유연하다.',
    image: 'flexible_cat',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '고양이는 아늑한 곳을 좋아한다.',
    image: 'cat_in_the_blanket',
    buttonNum: 2,
    answer: true,
  },
  {
    contents: '고양이의 발바닥은 곰돌이 모양이다.',
    image: 'cat_paw_pads',
    buttonNum: 1,
  },
  {
    contents: '이 고양이는 세탁한 수건더미에 올라가는 것을 좋아한다.',
    image: 'cat_on_towels',
    buttonNum: 1,
  },
  {
    contents: '고양이는 액체다.',
    image: 'melting_cat',
    buttonNum: 1,
  },
  {
    contents: '돼지 고양이',
    image: 'pig_cat',
    buttonNum: 1,
  },
  {
    contents: '이 고양이는 행거 등반 전문가다.',
    image: 'cat_on_the_hanger',
    buttonNum: 1,
  },
  {
    contents: '이 고양이는 보고서를 날려먹은 적이 있다.',
    image: 'cat_on_the_labtop',
    buttonNum: 1,
  },
  {
    contents: '이 고양이는 인사를 잘한다.',
    image: 'polite_cat',
    buttonNum: 1,
  },
  {
    contents: '이 고양이는 옷에 털 붙이는 걸 좋아한다.',
    image: 'cat_in_the_drawer',
    buttonNum: 1,
  },
  {
    contents: '어찌하여 목만 오셨소...',
    image: 'guanyu_cat',
    buttonNum: 1,
  },
] as Quiz[];

export function getQuiz() {
  return quiz;
}
