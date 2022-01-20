let Main_block = document.querySelector(".diagnose_block");
let Question_block = document.querySelector(".question");
let Question_start = document.querySelector(".Reincarnation_Start");
let name_player = document.querySelector(".namePlayer");
let name_Caution = document.querySelector(".name_caution");
let total_page = document.querySelector(".total");
let level = document.querySelectorAll(".lv_Answer");
let display_none_number = 0;
let display_block_number = 1;


Question_start.addEventListener("click",(e) => {
    if(name_player.value == ""){
        e.preventDefault();
        name_Caution.style.display = "block";
    }else{
    Main_block.style.display = "none";
    Question_block.style.display = "block";
    }
});

let box =[];
let Answer_button = document.querySelectorAll(".btn");
Answer_button.forEach(score => {
    score.addEventListener("click", () => {
        //回答スコア集計
        if(score.dataset.value == "a"){
            box.push(1);
        }else if(score.dataset.value == "b"){
            box.push(2);
        }else if(score.dataset.value == "c"){
            box.push(3);
        }else{
            box.push(4);
        }

        if(score.classList.contains("end")){
            Question_block.style.display ="none";
            total_page.style.display ="block";
            let total = box.reduce((initial,ChoiceNumber) => initial + ChoiceNumber);
            result(total);
        }else{
            display_none_number++;
            let question_number_NO =document.getElementById(`q_${display_none_number}`);
            question_number_NO.style.display = "none";

            display_block_number++;
            let question_number_OK = document.getElementById(`q_${display_block_number}`);
            question_number_OK.style.display = "block"; 
        }
    });
});
let total_level = document.querySelector(".Reincarnation_level");
let result_score = document.querySelector(".result");

function result(all_score) {
    if(all_score <= 15){
        level[0].style.display ="block"; 
        result_score.textContent =`${name_player.value}の転生レベルは ${total_level.textContent ="20"} `
    } else if(all_score <= 20){
        level[1].style.display ="block";
        result_score.textContent =`${name_player.value}の転生レベルは ${total_level.textContent ="30"} `
    } else if(all_score <= 25){
        level[2].style.display ="block";
        result_score.textContent =`${name_player.value}の転生レベルは ${total_level.textContent ="50"} `
    } else if(all_score <= 30){
        level[3].style.display ="block";
        result_score.textContent =`${name_player.value}の転生レベルは ${total_level.textContent ="80"}`
    } else{
        level[4].style.display ="block";
        result_score.textContent =`${name_player.value}の転生レベルは ${total_level.textContent ="100"}`
    }
}

for (let i = 1; i < level.length + 1; i++) {
    let Profession_Answer = document.querySelector(`.Profession_${i}`);
    let Race_Answer = document.querySelector(`.Race_${i}`);
    
    let Race_lest = [
        "ドラゴンニュート（竜人）",
        "ハーフエルフ（半人エルフ）",
        "ワーウルフ（狼人間）",
        "ワーキャット(猫人)",
        "マーメイド(人魚)",
        "アラクネ(蜘蛛人)",
        "フェアリー(妖精)",
    ]
    let Race = Race_lest[Math.floor(Math.random() * Race_lest.length)];
    
    if(Profession_Answer.classList.contains("Profession_1")){
        let Profession_lest1 = [
            "路地裏に佇む喫茶店の店主",
            "見習い聖職者",
            "怖がりな吟遊詩人"
        ]
        let Profession_lv1 = Profession_lest1[Math.floor(Math.random() * Profession_lest1.length)];
        Profession_Answer.textContent = `職業:${Profession_lv1}`;
        Race_Answer.textContent = `種族:${Race}`;

    } else if(Profession_Answer.classList.contains("Profession_2")){
        let Profession_lest2 = [
            "農村生まれの商人",
            "王室専用の宝石職人",
            "中級クラスの弓使い"
        ]
        let Profession_lv2 = Profession_lest2[Math.floor(Math.random() * Profession_lest2.length)];
        Profession_Answer.textContent = `職業:${Profession_lv2}`;
        Race_Answer.textContent = `種族:${Race}`;
    } else if(Profession_Answer.classList.contains("Profession_3")){
        let Profession_lest3 = [
            "ギルドの受付人",
            "王室直属の憲兵",
            "冒険家専門の薬剤師"
        ]
        let Profession_lv3 = Profession_lest3[Math.floor(Math.random() * Profession_lest3.length)];
        Profession_Answer.textContent = `職業:${Profession_lv3}`;
        Race_Answer.textContent = `種族:${Race}`;
    } else if(Profession_Answer.classList.contains("Profession_4")){
        let Profession_lest4 = [
            "冒険者パーティーの副団長",
            "王室直属の御者",
            "小屋で暮らす木こり"
        ]
        let Profession_lv4 = Profession_lest4[Math.floor(Math.random() * Profession_lest4.length)];
        Profession_Answer.textContent = `職業:${Profession_lv4}`;
        Race_Answer.textContent = `種族:${Race}`;
    } else{
        let Profession_lest5 = [
            "王家に仕える騎士",
            "巷で有名な魔術師",
            "夜中に暗躍する暗殺者"
        ]
        let Profession_lv5 = Profession_lest5[Math.floor(Math.random() * Profession_lest5.length)];
        Profession_Answer.textContent = `職業:${Profession_lv5}`;
        Race_Answer.textContent = `種族:${Race}`;
    }
}
import portfolio_partsList from "./portfolio_parts.js";
portfolio_partsList();