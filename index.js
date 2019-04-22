
navigator_corJQM = {

    constructor: (props) => {
        navigator_corJQM.state = {
            myChildrens: []
            , screenPages: []
            , historyPages: [props.defaultPage]
        }
        // window.$(document).on('pagechange', (event, x) => {
        //     // debugger
        //     if (navigator_corJQM.ChangePage(x.toPage.attr('id'), "homePage"))
        //         x.toPage.trigger('create');
        // });
        document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton"
                , (e) => {
                    navigator_corJQM.closeOrBack();


                    //  alert("Android back button"+JSON.stringify(e));
                    // navigator.app.exitApp();
                }
                , false);
        }, false);

        navigator_corJQM.full_Height = window.innerHeight;

        navigator_corJQM.bezy = false;
        navigator_corJQM.listLevelPages = props.listLevelPages;
        return true;
    }

    , setState: (state) => {
        for (var item in state) {
            navigator_corJQM.state[item] = state[item]
        }
    }



    , ChangePage: (goToPage, fromPage) => {

        if (!navigator_corJQM.bezy) {
            //   const navigator_corJQM = navigator_corJQM;

            if (fromPage === null) {
                fromPage = "" + navigator_corJQM.state.historyPages[navigator_corJQM.state.historyPages.length - 1] + "";
            }

           

            if (goToPage !== fromPage) {
                //---ניהול חזרות----//
                navigator_corJQM.bezy = true;
                //סיום האפליקציה, סגור
                if (navigator_corJQM.state.historyPages.length === 1
                    && (goToPage === undefined || goToPage === "undefined")) {
                    console.log('"window.navigator.app.exitApp()"');
                    //   navigator_corJQM.state
                    //     ? navigator_corJQM.state.myChildrens.swal.runSwal(true)
                    //     : 
                    window.navigator.app.exitApp();
                } else {
                    ///שמור היסטוריה
                    let new_historyPages = navigator_corJQM.state.historyPages;

                    if (navigator_corJQM.listLevelPages[goToPage] <= navigator_corJQM.listLevelPages[fromPage]) {
                        //חוזרים אחורה, מחק את כל הדפים שהרמה שלהם גבוהה משלי.
                        //new_historyPages.splice(new_historyPages.length - 1, 1);
                        new_historyPages = new_historyPages.filter((x) => navigator_corJQM.listLevelPages[x] < navigator_corJQM.listLevelPages[goToPage]);
                    }
                    new_historyPages.push(goToPage);
                    //שמירת שינויים בהיסטוריה
                    navigator_corJQM.setState({
                        historyPages: new_historyPages
                    });
                }

                //  window.location.href = window.location.href + "#"+goToPage;
            }
            navigator_corJQM.bezy = false;
            return true;
        } else return false;
    }

    , closeOrBack: () => {
        $.mobile.changePage("#" + navigator_corJQM.state.historyPages[navigator_corJQM.state.historyPages.length - 2], {
            transition: "slide", reverse: true
        });
        //navigator_corJQM.ChangePage(navigator_corJQM.state.historyPages[navigator_corJQM.state.historyPages.length-2],navigator_corJQM.state.historyPages[navigator_corJQM.state.historyPages.length-1]);
    }
}



if ($.mobile) {
    firstTime = true;
    $(document).bind('pagebeforechange', function (event, data) {
        if (data.toPage.includes !== undefined)
            if (data.toPage.includes('/'))
                return;
        if (!firstTime) {
            // window.cordova ?
            //debugger
            navigator_corJQM.ChangePage(
                data.toPage.attr !== undefined ? data.toPage.attr('id') : data.toPage.replace('#', ""), null)
            //     : navigator_corJQM.ChangePage(data.toPage.attr('id'), null);

            // event.preventDefault();
        } else firstTime = false;
    });

}



// -----Example
// navigator_corJQM.constructor({
//     listLevelPages: {
//         "homePage": 0,
//         "newPost": 3,
//         "page_Shop": 1,
//         "page_Settings": 2,
//         "popupMap": 9,
//         "page_about": 2
//     }
//     , defaultPage: "homePage"
// });