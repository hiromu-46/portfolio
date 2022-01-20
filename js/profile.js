let tab_portfolio_list = document.querySelectorAll(".portfolio_tab");

tab_portfolio_list.forEach(active_tab => {
    active_tab.addEventListener("click",tab_action);

    function tab_action(){        
        for (let i = 0; i < tab_portfolio_list.length; i++) {
            if(!active_tab.classList.contains("tab_active")){
                tab_portfolio_list[i].classList.remove("tab_active");
            }
        };
        if(!active_tab.classList.contains("tab_active")){
            active_tab.classList.add("tab_active");
        }
        portfolio_block_active(active_tab);
    }
});

let list_website = document.querySelector(".portfolio_website_block");
let list_webtool = document.querySelector(".portfolio_webtool_block");
function portfolio_block_active (active_tab){
    let tab_attribute = active_tab.getAttribute("class");

    if(tab_attribute == "website portfolio_tab tab_active"){
        list_webtool.classList.remove("list_active");
        list_website.classList.add("list_active");
    }else{
        list_website.classList.remove("list_active");
        list_webtool.classList.add("list_active");
    }
}