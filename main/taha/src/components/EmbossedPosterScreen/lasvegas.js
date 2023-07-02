import React, { useState } from 'react'
import CardTitle from '../VacumScreen/cardTitle';
import Description from '../VacumScreen/Description';
import Templet from '../common/Templet';
import CardSlider from '../common/CardSlider'
import vegas from '../../images/vegas.jpg'
import MoreDescription from './common/moreDescription';
import b from '../../images/b.png'
import b2 from '../../images/b2.png'
import almasi1 from '../../images/chalenum-almasi1.png'
import almasi2 from '../../images/chalenum-almasi2.png'
import crystal1 from '../../images/chalenum-crystal1.png'
import crystal2 from '../../images/chalenum-crystal2.png'
import crystal3 from '../../images/chalenum-crystal3.png'
import crystal4 from '../../images/chalenum-crystal4.png'
import almasiLight from '../../images/almasi-light.jpg'
import almasiLight2 from '../../images/almasi-light2.jpg'
import CustomizedServices from '../HomeScreen/CustomizedServices';
import { services } from './common/nav';


function Vegas() { 

    const Par = ()=>{
        return (
         <div className="tw-space-y-1 lg:tw-space-y-2">
             <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )</p>
                <p>
                صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر
                </p>
                <p>
                لبه :  ورق باضخامت 1 میلیمتر دو عدد 4 سانتی متر(مجموع ارتفاع حروف 8 سانتیمتر)
                </p>
                <p>
                پشت کار : پی وی سی 10 میلیمتر.
                </p>
                <p>
                نور : لامپ های 220 ولت فلامینی 4 ویا 5 وات.
                </p>
                <p>
                توضیحات : رنگ آمیزی به روش کوره ای و یا الکترواستاتیک انجام میشود.
                </p>
                <p>
                درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.

لبه حروف لترلایت (لاسوگاسی ) به طور معمول به صورت دو تکه ساخته میشود
                </p>
        </div>

    )
}
const Par2=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )لبه یک تکه آبکاری شده</p>
               <p>
               صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتری
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر.
               </p>
               <p>
               نور : لامپ های 220 ولت فلامینی 4 ویا 5 وات.
                 </p>
               <p>
               توضیحات : حروف پس از ساخت آبکاری مخصوص فلزات میشود.
درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد
               </p>
       </div>

   )
}
const Par3=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )لبه یک تکه با رنگ کوره ای</p>
               <p>
               صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتری
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر.
               </p>
               <p>
               نور : لامپ های 220 ولت فلامینی 4 ویا 5 وات.
                   </p>
               <p>
               توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی میشود.

درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par4=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
        <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای</p>
           <p>
           صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود.
           </p>
           <p>
           لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر که به صورت دوبل ساخته میشود
           </p>
           <p>
           پشت کار : پی وی سی 10 میلیمتر.
           </p>
           <p>
           نور : لامپ های 220 ولت 3 وات رنگی.
               </p>
           <p>
           توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی میشود.
درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
           </p>

   </div>

   )
}
const Par5=()=>{
    return (
    <div className="tw-space-y-1 lg:tw-space-y-2">
        <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی ولبه دو تکه با رنگ اتومبیلی ولامپ فلامینی</p>
           <p>
           صفحه : دو سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند.
           </p>
           <p>
           لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود).
           </p>
           <p>
           پشت کار : پی وی سی 10 میلیمتر.
           </p>
           <p>
           نور : لامپ های 220 ولت فلامینی4 ویا 5 وات.
               </p>
           <p>
           توضیحات : حروف پس از ساخت با رنگ اتومبیلی رنگ آمیزی میشود.
           </p>
           <p>
           درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
           </p>
   </div>

)
   
}
const Par6=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت ) با ورق استیل و لامپ12 ولت گلابی شکل وصفحه الماسی</p>
               <p>
               صفحه : ورق پلکسی با ضخامت8/2میلیمتری با برش الماسی و رینگ حاشیه با ورق استنلس استیل و لامپ های 12 ولت گلابی شکل که با فواصل معین کنارهم چیده شده اند.
               </p>
               <p>
               لبه :  نوار استنلس استیل باضخامت 6/0 میلیمتر به ارتفاع 4 الی 11 سانتیمتر
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر.
               </p>
               <p>
               نور : داخل هر عدد لامپ ،  9 عدد اس ام دی با حباب گلابی شکل 12 ولت با جریان مصرفی 8 میلی آمپر.
                   </p>
               <p>
               توضیحات: لامپها نباید مستقیما به برق شهر وصل شوند.
               </p>
               <p>
               درکارخانه ما صفحه استیل به لبه حروف توسط جوش لیزر متصل ولبه، توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par7=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت ) فلزی با رنگ پتینه و لامپ12 ولت وکیومی</p>
               <p>
               صفحه : ورق آهن با ضخامت 7/0 تا 1میلیمتری که پس از ساخت به روش پتینه رنگ آمیزی میشود.
               </p>
               <p>
               لبه : ورق آهن باضخامت7/0  تا 1میلیمتر به ارتفاع 8 سانتیمتر
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر.
               </p>
               <p>
               نور : اس ام دی 12 ولت با جریان 4 میلی آمپر.
                   </p>
               <p>
               توضیحات: لامپها نباید مستقیما به برق شهر وصل شوند.
               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par8=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی ولبه دو تکه با رنگ کوره ای ولامپ 12 ولت گلابی</p>
               <p>
               صفحه : دو سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود).
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های 12 ولت گلابی شکل که داخل هر یک از آن 9 عدد ال ای دی است
                   </p>
               <p>
               توضیحات : حروف پس از ساخت با روش الکترواستاتیک رنگ آمیزی میشودو لامپها نباید به طور مستقیم به برق شهر وصل شوند.
               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par9=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )استیل و لامپ 12 ولت گلابی شکل</p>
               <p>
               صفحه : دو سری ورق استنلس استیل با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود).
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های 12 ولت گلابی شکل که داخل هر یک از آن 9 عدد ال ای دی است.
                   </p>
               <p>
               توضیحات : لامپها نباید به طور مستقیم به برق شهر وصل گردند
               </p>
               <p>
               درکارخانه ما صفحه استنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par10=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )ترکیب استیل وفلز با رنگ کوره ای ولامپ 12 ولت گلابی</p>
               <p>
               صفحه : دو سری ورق استنلس استیل وآهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ودر دوسایز ساخته میشوند
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسریاز جنس خودشان صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود)
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های 12 ولت گلابی شکل که داخل هر یک از آن 9 عدد ال ای دی است.
                   </p>
               <p>
               توضیحات : لامپها نباید به طور مستقیم به برق شهر وصل گردند.وحروف فلزی به روش الکترواستاتیک رنگ آمیزی میشود.
               </p>
               <p>
               درکارخانه ما صفحه استنلس استیل وآهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد
               </p>
       </div>

   )
}
const Par11=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت ) فلز با رنگ کوره ای ولامپ فلامینی وحاشیه نئون</p>
               <p>
               صفحه : دوسری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس هم برش میخوردوحاشیه کار به لامپ نئون مزین میگردد 
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دو صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود)
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های 220 ولت فلامینی وحاشیه لامپ نئون.
                   </p>
               <p>
               توضیحات : لامپها نباید به طور مستقیم به برق شهر وصل گردند.وحروف فلزی به روش الکترواستاتیک رنگ آمیزی میشود.
               </p>
               
       </div>

   )
}
const Par12=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای</p>
               <p>
               صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به صورت دوبل ساخته میشود
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های اس ام دی 12 ولت با روکش پلکسی وکیومی
                   </p>
               <p>
               توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی میشود
               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par13=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای</p>
               <p>
               صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود.
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به صورت دوبل ساخته میشود
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های اس ام دی 12 ولت پیکسلی.
                   </p>
               <p>
               توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی میشود ولامپها نباید به طور مستقیم به برق شهر وصل شوند
               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par14=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای ولامپ 12 ولت ستاره ای</p>
               <p>
               صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر که به صورت دوبل ساخته میشود               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های 12 ولت گلابی شکل که داخل هر عدد حباب 9 عدد اس ام دی جاسازی شده ولامپها نباید به طور مستقیم به برق شهر وصل شوند                   </p>
               <p>
               توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی میشود.               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.               </p>
       </div>

   )
}
const Par15=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی ولبه دو تکه با رنگ کوره ای دو رنگ ولامپ 12 ولت گلابی</p>
               <p>
               صفحه : دو سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود)
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های 12 ولت گلابی شکل که داخل هر یک از آن 9 عدد ال ای دی است.
                   </p>
               <p>
               توضیحات : حروف پس از ساخت با روش الکترواستاتیک در دو رنگ ، رنگ آمیزی میشود و لامپها نباید به طور مستقیم به برق شهر وصل شوند
               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par16=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای ولامپ وکیومی</p>
               <p>
               صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود
               </p>
               <p>
               لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 الی 8 سانتیمتر که به صورت دوبل ساخته میشود
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های اس ام دی با روکش پلکسی وکیومی ، لامپها نباید به طور مستقیم به برق شهر وصل شوند
                   </p>
               <p>
               توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی میشود
               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد
               </p>
       </div>

   )
}
const Par17=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت )فلزی لبه بلندیک تکه با رنگ کوره ای ال ای دی پیکسلی</p>
               <p>
               صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری برای جای لامپ ها برش میخورد
               </p>
               <p>
               لبه :  ورق باضخامت 1 میلیمتر به ارتفاع متناسب با ابعاد حروف
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های ال ای دی پیکسلی 5 ویا 12 ولت
                   </p>
               <p>
               توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی میشود
               </p>
               <p>
               درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد
               </p>
       </div>

   )
}
const Par18=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-2">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لاسوگاسی ( لترلایت ) ال ای دی پیکسلی ورویه پلکسی شفاف</p>
               <p>
               صفحه : یک سری ورق پلکسی با ضخامت 4 میلیمتری مشکی و10 میلیمتر شفاف ودو سری 5 میلیمتر سفید برای جای لامپ ها برش میخورد یک صفحه پلکسی شفاف یرای قرار دادن بروی ال ای دی ها ..
               </p>
               <p>
               لبه :  ورق باضخامت 4میلیمتر مشکی به ارتفاع متناسب با ابعاد حروف
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتر
               </p>
               <p>
               نور : لامپ های ال ای دی پیکسلی 5 ویا 12 ولت
                   </p>
               <p>
               توضیحات :لامپ ها نباید به طور مستقیم به برق شهر وصل گردند
               </p>
       </div>

   )
}

    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={vegas}></img>
                </div>
             </div>
             <CardTitle>حروف لاسوگاسی</CardTitle>
             <Description>
                 <p> 
                 حروف لاسوگاسی یا لترلایت  به نوعی از حروف اطلاق میگردد که لامپ های آن قابل روئیت بوده و پوششی از اکرولیک بروی آن ندارد                  </p>
                 <p> 
                 لتر لایت را میتوان با انواع حروف فلزی واستنلس استیل ، اکرولیک وحتی چنلیوم ساخت ولامپ های آن را که از تنوع رنگی کاملی برخوردار است را با فواصلی معین بروی آن جای داد                 </p> 
                 <p>
                 عمدتا فست فودها وشهرهای بازی از حروف لتر لایت استفاده میکنند                  </p>
                 <p>
                 استفاده از لامپ های فلامینی 220 ولت که متاسقانه خیلی هم مرسوم شده بدلیل مصرف بالای انرژی و شدت نور آن وخطرات ناشی از اتصالی و برق گرفتگی را توصیه نمیکنیم                 </p>
                 <p>
                 نور لامپهای حروف لتر لایت نباید خیلی شدید باشد وچیدمان لامپها بروی حروف از اصول خاصی تبعیت میکند که عدم رعایت دو مورد مذکور ضمن از دست دادن زیبایی شاید به کارایی آن هم لطمه وارد کند                 </p>
                 <p>
                 در صورتی که مایل به ساخت حروف لتر لایت ویا لاسوگاسی از جنس فلز هستید حتما به کیفیت رنگ و نوع ساخت توجه ای ویژه داشته باشید                 </p>
                 <p>
                 قیمت حروف لاسوگاسی و یا لترلایت مطابق سایر حروف برجسته ،براساس متر محیط دور حروف محاسبه میشود که متریال مورد نظر، قطر قلم ، تعداد و نوع لامپ دربرآورد قیمت نهایی موثراست                  </p>
                 <p>
                 در مجموعه تابلوسازی طاها صفحه حروف برجسته لترلایت با دستگاه فایبربرش خورده ولبه آن توسط ماشین تمام اتوماتیک فرم دهی واتصال لبه به صفحه توسط جوش لیزر انجام میشود                 </p>
                 <p>
                 </p>
                 <p>
                 امکان بازدید از مراحل کار وتولید سفارشات شما با هماهنگی قبلی از کارگاه اختصاصی گروه تابلوسازی  طاها مهیا است                 </p>
                 <p>
                 برای دیدن تنوع حروف برجسته لاسوگاسی ( لترلایت ) و نوع نور پردازی و اطلاع از مشخصات فنی به عکسهای سرفصل آنها مراجعه بفرمایید
                 </p>
             </Description> 

             <CardTitle>
                 <p className="tw-text-green-600">
                 انواع حروف لاسوگاسی
                </p>
            </CardTitle>
             <MoreDescription src1={b} src2={b2} par={<Par/>}> 
                 <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )</p>
                 <p>
                 صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر لبه :  ورق باضخامت 1 میلیمتر دو عدد 4 سانتی متر(مجموع ارتفاع حروف 8 سانتیمتر) پشت کار : پی وی سی 10 میلیمتر. نور : لامپ های 220 ولت فلامینی 4 ویا 5 وات. توضیحات : رنگ آمیزی به روش...                 </p>
             </MoreDescription>
             <MoreDescription  src1={almasi1} src2={almasi2} par={<Par2/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )لبه یک تکه آبکاری شده</p>
             <p>
             صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتری لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر پشت کار : پی وی سی 10 میلیمتر. نور : لامپ های 220 ولت فلامینی 4 ویا 5 وات. توضیحات : حروف پس از ساخت آبکاری مخصوص فلزات میشود.  درکارخانه...             </p>
             </MoreDescription>
             <MoreDescription src1={crystal1} src2={crystal2} par={<Par3/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )لبه یک تکه با رنگ کوره ای</p>
             <p>
             صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتری لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر پشت کار : پی وی سی 10 میلیمتر. نور : لامپ های 220 ولت فلامینی 4 ویا 5 وات. توضیحات : حروف پس از ساخت به روش الکترواستاتیک رنگ آمیزی...             </p>
             </MoreDescription>
             <MoreDescription src1={crystal3} src2={crystal4} par={<Par4/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای</p>
             <p>
             صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر که به صورت...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par5/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )فلزی ولبه دو تکه با رنگ اتومبیلی ولامپ فلامینی</p>
             <p>
             صفحه : دو سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود). پشت کار : پی وی سی 10 میلیمتر. نور...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par6/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت ) با ورق استیل و لامپ12 ولت گلابی شکل وصفحه الماسی</p>
             <p>
             صفحه : ورق پلکسی با ضخامت8/2میلیمتری با برش الماسی و رینگ حاشیه با ورق استنلس استیل و لامپ های 12 ولت گلابی شکل که با فواصل معین کنارهم چیده شده اند. لبه :  نوار استنلس استیل باضخامت 6/0 میلیمتر به ارتفاع 4 الی 11 سانتیمتر پشت کار : پی وی...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par7/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت ) فلزی با رنگ پتینه و لامپ12 ولت وکیومی</p>
             <p>
             صفحه : ورق آهن با ضخامت 7/0 تا 1میلیمتری که پس از ساخت به روش پتینه رنگ آمیزی میشود. لبه : ورق آهن باضخامت7/0  تا 1میلیمتر به ارتفاع 8 سانتیمتر پشت کار : پی وی سی 10 میلیمتر. نور : اس ام دی 12 ولت با جریان 4 میلی آمپر....             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par8/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )فلزی ولبه دو تکه با رنگ کوره ای ولامپ 12 ولت گلابی</p>
             <p>
             صفحه : دو سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود). پشت کار : پی وی سی 10 میلیمتر. نور...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par9/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )استیل و لامپ 12 ولت گلابی شکل</p>
             <p>
             صفحه : دو سری ورق استنلس استیل با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود). پشت کار : پی وی سی 10 میلیمتر....             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par10/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )ترکیب استیل وفلز با رنگ کوره ای ولامپ 12 ولت گلابی</p>
             <p>
             صفحه : دو سری ورق استنلس استیل وآهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ودر دوسایز ساخته میشوند. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسریاز جنس خودشان صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود). پشت کار :...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par11/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت ) فلز با رنگ کوره ای ولامپ فلامینی وحاشیه نئون</p>
             <p>
             صفحه : دوسری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس هم برش میخوردوحاشیه کار به لامپ نئون مزین میگردد . لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دو صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود). پشت کار :...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par12/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای</p>
             <p>
             صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به صورت...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par13/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600"> حروف برجسته لاسوگاسی ( لترلایت )فلزی لبه بلندیک تکه با رنگ کوره ای</p>
             <p>
             صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری برای جای لامپ ها برش میخورد.. لبه :  ورق باضخامت 1 میلیمتر به ارتفاع متناسب با ابعاد حروف. پشت کار : پی وی سی 10 میلیمتر. نور : لامپ های 220 ولت. توضیحات : حروف پس از ساخت...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par14/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای ولامپ 12 ولت ستاره ای</p>
             <p>
             صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 8 سانتیمتر که به صورت...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par15/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لاسوگاسی ( لترلایت )فلزی ولبه دو تکه با رنگ کوره ای دو رنگ ولامپ 12 ولت گلابی</p>
             <p>
             صفحه : دو سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری که معکوس یکدیگر ساخته میشوند. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 سانتیمتر که به هر دوسری صفحه جوش میشود( مجموع ارتفاع لبه 8 سانتیمتر خواهد بود). پشت کار : پی وی سی 10 میلیمتر. نور...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par16/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">
حروف برجسته لاسوگاسی ( لترلایت )فلزی رینگ دوبل ولبه یک تکه با رنگ کوره ای ولامپ وکیومی</p>
             <p>
             صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری به صورت استروگ ویک سری صفحه برای جای لامپ ها برش خورده که به سری اول لبه یک سانتی رو به داخل حروف جوش میشود. لبه :  ورق باضخامت 7/0 میلیمتر به ارتفاع 4 الی 8 سانتیمتر که...             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par17/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">
حروف برجسته لاسوگاسی ( لترلایت )فلزی لبه بلندیک تکه با رنگ کوره ای ال ای دی پیکسلی</p>
             <p>
             صفحه : یک سری ورق آهن با ضخامت 6/0 الی 1 میلیمتری برای جای لامپ ها برش میخورد.. لبه :  ورق باضخامت 1 میلیمتر به ارتفاع متناسب با ابعاد حروف. پشت کار : پی وی سی 10 میلیمتر. نور : لامپ های ال ای دی پیکسلی 5 ویا 12 ولت....             </p>
             </MoreDescription>
             <MoreDescription src1={almasiLight} src2={almasiLight2} par={<Par18/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">
حروف برجسته لاسوگاسی ( لترلایت ) ال ای دی پیکسلی ورویه پلکسی شفاف</p>
             <p>
             صفحه : یک سری ورق پلکسی با ضخامت 4 میلیمتری مشکی و10 میلیمتر شفاف ودو سری 5 میلیمتر سفید برای جای لامپ ها برش میخورد یک صفحه پلکسی شفاف یرای قرار دادن بروی ال ای دی ها .. لبه :  ورق باضخامت 4میلیمتر مشکی به ارتفاع متناسب با ابعاد حروف....             </p>
             </MoreDescription>
             <CustomizedServices services={services} cname="tw-mt-4"/>
        </div>
    </Templet>
}


export default Vegas