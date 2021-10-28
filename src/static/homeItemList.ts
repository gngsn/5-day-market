import { talImage, broomImage, maedeupImage, homiImage, onggiImage, gatImage } from "./image";
import { 
    maedeup1, maedeup2, maedeup3, maedeup4, maedeup5,
    hahoemask1, hahoemask2, hahoemask3, hahoemask4, hahoemask5, hahoemaskBanner,
    broom1, broom2, broom3, broom4, broom5, broomBanner,
    onggi1, onggi2, onggi3, onggi4,
    homi1, homi2, homi3, homi4,
    gat1, gat2, gat3, gat4,
} from "./image";

export interface ItemFunding {
    master: string;
    sponsor: number;
    deadline: Date;
    total: number;
}

export interface ItemContent {
    master: string;
    masterDesc: string;
    subTitle: string;
    productInfo: string;
    productImages: Array<Array<string>>;
    caption?: string;
};

export interface ItemType {
    id: number;
    banner?: string;
    bannerType?: 'video' | 'image';
    enTitle: string;
    title: string;
    desc: string;
    image: string;
    content: ItemContent;
    funding: ItemFunding;
};

const Items: Array<ItemType> = [
    {
        id: 0,
        image: maedeupImage,
        title: "매듭장",
        enTitle: "MAEDEUP",
        desc: "Korean Traditional Decorative Knotting",
        banner: "https://www.youtube.com/embed/OMzGtjM7jJs",
        bannerType: "video",
        content: {
            master: "매듭장인, 김은영",
            masterDesc: "무형문화재 제 13호 매듭장, 김은영",
            subTitle: "조화와 완결의 미학, 매듭",
            productInfo: `매듭장이란 끈목을 이용해 여러 가지 종류의 매듭을 만들거나 술을 다는 기술을 가진 사람을 말합니다. 끈목은 여러 가닥의 실을 합해서 3가닥 이상의 끈을 엮는 것을 말하며, 술이란 끈이나 매듭의 아래에 장식을 위해 다는 것을 말합니다. 
                매듭은 오색물감으로 명주실을 염색하는 것에서부터 시작됩니다, 매듭을 맺어 대송곳으로 질서있게 죄어서 쓰임새에 따라 오색영롱하게 엮어가는 작업이 이어집니다. 노리대 하나를 만들기 위해서는 열흘 이상의 수공(手工)이 들어가야 하며 노리개에 달린 한 가닥의 술을 만드는데만 수백 차례 이상 쉬지 않고 실을 꼬아야 완성됩니다. 매듭은 온전히 인내와 공력으로 탄생되는 산물이라고 할 수 있습니다. 여러나라의 다양한 매듭이 있지만 우리나라 매듭의 특징이자 미학은 어울림에 있습니다. 
                색색 고운 빛깔로 염색한 실을 나르고 올을 만드는 과정을 거쳐 끈목(다회多繪)으로 거듭나는 과정은 자연과 인력의 조화 없이는 나올 수 없습니다. 끈목을 이리저리 엮어 벌이나 나비, 매화, 국화, 병아리 등 자연물을 형상화한 매듭은 산호나 비취, 진주와 같은 보석과 어우러지면 그 화려함이 배가되고, 부채나 선비들의 도포에는 멋스러운 기품을 더했습니다. 나무나 직물, 금속 등 어떤 소재와 함께 배치되어도 다른 재료의 매력을 돋보이게 하는 동시에 지나침이 없이 녹아드는 것이 매듭의 미덕입니다.

                무형문화재 제 13호 매듭장, 김은영 장인 전통을 충실하게 지켜나가는 것이 무엇보다 중요하다고 여기는 동시에, 현대인들이 즐기지 못하고 외면하는 전통공예는 살아남을 길이 없다는 사실 역시 절감하고 있습니다. “며칠을 매달려 완성된 작품도 있고, 몇 달을 공을 들여 만들어내는 것도 있어요. 작품 하나하나 애틋하고 정이 가죠. 그런데 이런 전통공예가 사람들에게 대접을 못 받는 것 같아서 서운하고 서글픈 마음이 들기도 해요. 요즘 사람들은 매듭에 대한 관심도 적은 편이고, 수요도 많지 않은 편이죠. 이렇게 시간이 흐르다보면 전통 매듭을 박물관에서만 볼 수 있게 되지 않을까 하는 걱정도 됩니다. 김은영장인은 산업디자이너, 제자들과 매듭이라는 것이 잊혀지지 않도록 현대에 사용할 수 있는 매듭에 대해 연구합니다.`,
            productImages: [
                [maedeup1, maedeup2],
                [maedeup3],
                [maedeup4, maedeup5],
            ]
        },
        funding: {
            master: "김은영",
            sponsor: 462,
            deadline: new Date("2022-10-21"),
            total: 56213000
        }
    },
    {
        id: 1,
        image: talImage,
        title: "한국 화회탈",
        banner: hahoemaskBanner,
        bannerType: "image",
        enTitle: "Hahoe Mask",
        desc: "Korean Traditional  masks or tal.",
        content: {
            master: "전통 탈 장인 , 신정철 가족",
            masterDesc: "문화재수리기능 보유 제4281호",
            subTitle: "삶의 희로애락을 담아온 풍자의 미, 한국 전통 탈",
            productInfo: `한국 전통 탈은 예로부터 얼굴을 가리는 물건으로 단순히 신분 노출 방지 뿐 아니라, 탈에 새겨진 얼굴에 의미를 담아 주술적, 혹은 창작예술적인 행위에도 널리 이용되어져 왔습니다. 한국에서 탈은 예부터 우리 삶의 희로애락을 담아온 풍자의 미, 한국 전통 탈로, 연희자를 새로운 존재로 태어나게 하며 우리 선조의 웃음과 해학의 정신을 보여주고 있습니다.\n
            우리 선조의 해학의 정신은 탈춤에서 특히 두드러집니다. 탈춤은 서민의 건강한 삶을 거리낌없이 표현하고, 해학과 담백함을 지니고 있습니다. 전국에서 탈춤에 쓰이는 탈은 약 250여 종으로 매우 다양한 형태를 보여주고 있습니다.\n
            탈은 탈춤과 함께 현대에서 사라지고 있지만 이를 이어나가고 있는 장인이 있습니다. 신정철 장인은 손에 나무를 쥔 지 51년째이지만 여전히 자신의 일을 사랑하며 가족들과 전통 탈을 이어가고 있습니다. 공방 곳곳을 채운 조각품들도 나무만 손에 쥐면 또 무엇을 만들어볼까 하며 두근거리는 심정으로 깎아낸 것들입니다. 손님 대부분이 관광객이기에 상품성 있는 전통 공예품 위주로 진열하긴 했어도, 세세히 살펴보면 시선이 잘 닿지 않는 곳에 손자들을 위한 손장난감, 동물 모양의 피리, 전통 탈을 캐릭터화한 작은 소품까지 사심 담긴 작업물이 많습니다.\n
            탈은 시대상을 반영하며, 조선시대에는 양반계급에 대한 평민들의 반감이 탈에 반영된 것이 특징입니다. 탈은 현대의 아바타, 멀티페르소나의 원조로 자신을 숨기며 자유롭게 생각을 표현하기도 하고 자신이 뜻하는 바를 나타내는 데 효과적으로 사용되었습니다.`,
            productImages: [
                [hahoemask1, hahoemask2],
                [hahoemask3],
                [hahoemask4, hahoemask5],
            ],
            caption: "신민웅 작가가 북청사자놀음 탈을 현대적으로 재해석해 만들었다.크기를 작게 줄이고 가는 술을 달았다."
        },
        funding: {
            master: "신정철",
            sponsor: 124,
            deadline: new Date("2022-10-21"),
            total: 21440000
        }
    },
    {
        id: 2,
        image: broomImage,
        title: "빗자루",
        banner: broomBanner,
        bannerType: "image",
        enTitle: "BROOM",
        desc: "Korean traditional broom",
        content: {
            master: "빗자루 장인 , 이동균",
            masterDesc: "광덕빗자루공예사",
            subTitle: "광덕빗자루, 쓰임을 다하다",
            productInfo: `전통 공예 빗자루 제조업체로 실생활에서 사용하는 실용성 빗자루, 장식 소품으로 사용하는 고급 빗자루를 제작하고, 갈대를 얇게 찢어 만든 붓을 개발하였습니다. 자연에서 온 소재에 장인의 뛰어난 기술이 만나 탄생하는 광덕 빗자루는 갈대와 수수, 강아지풀 등의 천연 재료를 사용하고 있습니다. 광덕 빗자루는 해외에서 찾아올 정도로 인정을 받고 있습니다.\n
            과거 빗자루는 방비, 마루비, 마당비, 부엌비 등 쓰임에 따라 짚, 싸리, 수수, 소나무, 동물의 꼬리털 등 소재에 따라 다양한 용도와 형태로 긴 시간 우리 삶 속에 함께 했습니다. 하지만 생활의 필수품인만큼 흔하고 익숙했던 빗자루는 집안 구조의 변화와 함께 달라진 생활방식, 진공청소기의 등장으로 서서히 우리 주변에서 사라져가고 있습니다.\n
            충북 제천의 광덕 빗자루 공예사는 현재 우리나라에 마지막 남은 빗자루 장인인 이동균 명인이 운영하는 공방입니다. 1980년대까지 호황을 누렸던 빗자루는 값싼 중국산 나일론 빗자루와 청소기의 보급으로 우리 빗자루의 수요가 급감하였습니다. 빗자루의 기능적 한계를 느낀 생산자들이 사라져갈 때 명인은 전통 빗자루가 가진 공예적 가치와 현대 기준에 맞춘 실생활 소품으로 빗자루의 개발과 계승을 고민하며 지금까지 홀로 명맥을 이어오고 있습니다.\n
            질 좋은 빗자루는 한번 구매하면 십 년 이상 사용할 수 있습니다. 공간을 차지하지 않으며 손이 닿는 곳에 두고 언제든 빠르고 쉽게 주변을 정리할 수 있습니다. 대부분의 소재가 자연에서 온 것으로 쓰임이 다 할 때까지 친환경적입니다. 청소기의 등장으로 사라졌던 빗자루가 이제는 청소기의 소음과 관리, 사용의 번거로움을 대체할 대안으로 여겨지고 있습니다.`,
            productImages: [
                [broom1, broom2],
                [broom3],
                [broom4, broom5],
            ]
        },
        funding: {
            master: "이동균",
            sponsor: 521,
            deadline: new Date("2022-10-23"),
            total: 56213000
        }
    },
    {
        id: 3,
        image: onggiImage,
        title: "옹기",
        enTitle: "ONGGI",
        desc: "Korean Traditional earthenware vessel",
        content: {
            master: "옹기장인 , 정윤석",
            masterDesc: "국가무형문화재 제96호 옹기장 보유자",
            subTitle: "단순함과 한국적인 미학",
            productInfo: `도자기는 단순 수공예가 아니라 고대부터 수많은 문명들이 공통적으로 인정하던 예술의 정점 중 하나였습니다. 따라서 유물이나 고미술품으로 엄청난 가치를 가지고 있는 물건입니다\n
            도자기(陶瓷器)는 도기와 자기를 합쳐서 부르는 용어입니다. 도기란 도토(陶土)를 가지고 도공(陶工)이 원하는 형태를 만들어 도기가마에서 구워낸 그릇을 말하는 것으로 흔히 질그릇이라고 불리며, 자기란 자토(瓷土)를 가지고 사기장(沙器匠)이 원하는 형태를 만들어 자기가마에서 구워낸 그릇을 말하는 것으로 흔히 사기그릇이라고 합니다. 옹기는 이 가운데 도기에 속하며, ‘옹기장’이란 독과 항아리 등을 만드는 장인을 가리킵니다.\n
            옹기장 정윤석 님은 “옹기는 자연에서 태어나고 그것들의 사용은 아무런 해를 끼치 지 않는다”고 말하십니다. 옹기는 조선의 생활의 지혜로 탄생하여 내부 음식의 발효 및 숙성 과정을 돕는 매우 독특한 물건입니다.\n
            도자기는 식기로써 재질 중 손에 꼽을 만큼 안전한 재질로써 최근에 다시 각광 받고 있습니다. 또한 질 좋은 도자기는 평생을 사용하고 후대에게 물려줄 만큼 긴 사용 시간을 가지고 있으며, 관리가 잘 된다면 반 영구적으로 사용할 수 있는 훌륭한 물건입니다. `,
            productImages: [
                [onggi1, onggi2],
                [onggi3],
                [onggi4],
            ]
        },
        funding: {
            master: "정윤석",
            sponsor: 462,
            deadline: new Date("2022-10-21"),
            total: 56213000
        }
    },
    {
        id: 4,
        image: homiImage,
        title: "호미",
        enTitle: "HOMI",
        desc: "Korean Traditional gardening tool",
        content: {
            master: "대장장이, 이광원",
            masterDesc: "40년 대장장이 ",
            subTitle: "뜨거움으로 만들어지는 단단함, 대장장이",
            productInfo: `농업이 주요 산업이었던 과거, 농기구를 비롯한 대부분의 생활 용구를 대장간에 만들었습니다. 닳거나 못 쓰게 된 제품을 고치고 재생시키는 일도 전담하며 대장간은 우리 삶에 필수적인 장소였습니다.
            마을 단위로 존재하던 그 많던 대장간은 여러 수공품과 마찬가지로 중국산과 공장의 대량 생산에 밀려 하나둘 자취를 감추게 되었습니다.\n
            경기도 포천에는 호미와 낫을 비롯한 다양한 농기구를 생산하는 숲속의 대장간이 있습니다. 이광원 대장장이는 1980년 대장간을 시작하여 현재는 박물관과 후계자 양성을 위한 아카데미도 준비하고 있습니다.
            대장간의 환경을 현대식으로 개조하는 한편, 사라져가는 전국의 대장간을 찾아다니며 장인들의 연장과 집기를 수집하고 보존하는 데 노력을 기울이고 있습니다. 이 모든 노력은 더 많은 사람이 우리의 철기문화에 관심을 가지고 역사 속으로 사라져버리게 하지 않기 위해서입니다.\n
            최근 대장간에서 만들던 오래된 농기구 하나가 재조명 되고 있습니다. 바로 호미입니다.
            호미는 논과 밭의 김을 맬 때 사용하는 한국 고유의 연장입니다. 호미가 국내보다 해외에서 더 주목받게 된 이유는 그들의 정원 문화에 호미가 최적의 도구이기 때문입니다.
            정원용 삽으로 돌을 고르고 흙을 덮으며 잡초를 뽑는 데는 한계가 있습니다.
            그러나 호미 한 자루에는 이 모든 기능이 담겨 있습니다. 하나하나 손으로 구부려 만드는 호미의 날과 슴베에는 과학적인 계산과 오랜 지혜가 집약되어 있습니다. 도심 안에서 작은 텃밭이나 정원을 가꾸는 삶을 꿈꾸는 한국인의 삶에서도 호미는 그 쓸모를 재확인 해볼 도구라고 생각됩니다.`,
            productImages: [
                [homi1, homi2],
                [homi3],
                [homi4],
            ]
        },
        funding: {
            master: "이광원",
            sponsor: 102,
            deadline: new Date("2022-10-21"),
            total: 56213000
        }
    },
    {
        id: 5,
        image: gatImage,
        title: "갓",
        enTitle: "GAT",
        desc: "Korean traditional hat",
        content: {
            master: "갓의 장인 , 정춘모",
            masterDesc: "중요무형문화재 제4호",
            subTitle: "무한한 가능성을 가진 갓",
            productInfo: `갓은 삼국시대부터 유래된 물건입니다. 이후 개화기인 1894년부터 서구문화가 정착할 때까지 1,500년 이상 한국 남성들이 즐겨 쓰던 장신구입니다. 스코틀랜드의 화가 엘리자베스 키스는 “조선 사람들은 대체로 소박하고 단순하지만 모자만큼은 예외적으로 다양한 면모를 지니고 있다"고 말할 만큼 소박한 한국 문화에서 성인 남자들이 외출할 때 반드시 갖추어야 할 예복중의 하나로 실용적이며 신분을 반영하는 상징적인 물건이였습니다. 그러나 서구문화가 정착하면서 자취를 감추게 되었습니다.\ㅜ
            하지만 아직 갓의 명맥을 이어나가는 분이 계십니다. 바로 정춘모 장인으로 그는 1957년부터 갓 만드는 일을 배우기 시작했습니다. 그러나 그와 함께 갓일을 하던 동료들도 하나둘씩 떠나갔다. 조선시대부터 갓 재료를 만들어온 장인들의 나이는 일흔을 훌쩍 넘었고, 후계자가 없는 상황이었습니다. 정춘모 장인은 이대로는 맥이 끊길 것 같다는 생각을 하여 갓의 원형을 이어가기 위해 갓의 재료를 만드는 분들의 제자로 들어가서 모든 것을 배웠고. 그렇게 분업화돼있던 갓 제작일을 모두 배워서, 맥이 끊어질 뻔했던 통영갓을 계속 만들어오고 있습니다.\ㅜ
            최근에는 국내의 드라마들이 해외에서 인기를 끌면서 갓 또한 점차 알려지며 좋은 반응을 얻고 있습니다. 서구권에서는 중절모와 비슷한 용도라고 해석하기도 하며 다시금 관심을 받는 좋은 상황이 일어나고 있습니다.
            현대에는 서구권의 스포츠 모자를 주로 착용하지만, 한국 특유의 삶에 맞춰진 갓의 특징을 다시금 확인해볼 떄라고 생각됩니다.`,
            productImages: [
                [gat1, gat2],
                [gat3],
                [gat4],
            ]
        },
        funding: {
            master: "정춘모",
            sponsor: 462,
            deadline: new Date("2022-10-21"),
            total: 56213000
        }
    },
];
export default Items;