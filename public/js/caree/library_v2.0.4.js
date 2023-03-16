var globalBanner;
var theDivObjectName;
var randomBannerIndex = null;
var the_items = new Array();
var the_times = new Array();

function outputBanner(bannerArr, tableAttributes, tdAttributes, tdSpaceAttributes) {
    var str = "";
    var bannerArrLength = bannerArr.length;
    if (bannerArrLength > 0) {
        str += "<table " + tableAttributes + ">";
        var i = 1;
        for (indexKey in bannerArr) {
            switch (bannerArr[indexKey][0]) {
                case "1":
                    str += "<tr>";
                    str += "		<td " + tdAttributes + ">";
                    if (bannerArr[indexKey][4] != "") {
                        str += "			<a href='" + bannerArr[indexKey][4] + "' target='" + bannerArr[indexKey][5] + "'><img src='" + bannerArr[indexKey][3] + "' border='0' alt='" + bannerArr[indexKey][6] + "'></a>"
                    } else {
                        str += "			<img src='" + bannerArr[indexKey][3] + "' border='0' alt='" + bannerArr[indexKey][6] + "'>"
                    }
                    str += "		</td>";
                    str += "</tr>";
                    break;
                case "2":
                    str += "<tr>";
                    str += "		<td " + tdAttributes + ">";
                    str += '			<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"  width="' + bannerArr[indexKey][1] + '" height="' + bannerArr[indexKey][2] + '"><param name="movie" value="' + bannerArr[indexKey][3] + "?linkf=" + bannerArr[indexKey][4] + '"><param name="quality" value="high"><param name="wmode" value="opaque" /><embed src="' + bannerArr[indexKey][3] + "?linkf=" + bannerArr[indexKey][4] + '" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[indexKey][1] + '" height="' + bannerArr[indexKey][2] + '"></embed></object>';
                    str += "		</td>";
                    str += "</tr>";
                    break
            }
            if ((tdSpaceAttributes != "") && (i < bannerArrLength)) {
                str += "<tr>";
                str += "		<td " + tdSpaceAttributes + ">";
                str += "		</td>";
                str += "</tr>"
            }
            i++
        }
        str += "</table>"
    }
    return str
}
function makeADivObject(divName, Attributes) {
    document.write('<div id="' + divName + '" '+(typeof Attributes !=""?Attributes:"" )+'></div>')
}
function doSlideRandomBanner(bannerArr, tableAttributes, tdAttributes) {
    globalBanner = bannerArr;
    theDivObjectName = "slide";
    makeADivObject(theDivObjectName);
    slideBanner(globalBanner, theDivObjectName, null, tableAttributes, tdAttributes);
    var timer = window.setInterval("slideBanner(globalBanner, theDivObjectName, null, '" + tableAttributes + "', '" + tdAttributes + "')", 10000)
}
var randomBannerIndex = null;

function doSlideBanner(bannerArr, tableAttributes, tdAttributes, times) {
    this.globalBanner = "";
    if (bannerArr.length > 0) {
        for (i = 0; i < bannerArr.length - 1; i++) {
            this.globalBanner += bannerArr[i] + ","
        }
        this.globalBanner += bannerArr[i]
    }
    this.theDivObjectName = "slide" + Math.round(Math.random() * Math.pow(10, Math.round(Math.random() * 10)));
    the_times[theDivObjectName] = 0;
    if (!times) {
        times = 10000
    } else {
        if (isNaN(times)) {
            times = 10000
        }
    }
    makeADivObject(this.theDivObjectName, tableAttributes);
    doSlideBannerA1(this.globalBanner, this.theDivObjectName, tableAttributes, tdAttributes, times)
}
function doSlideBannerA1(bannerArr, theDivObjectName, tableAttributes, tdAttributes, times) {
    if (the_items[theDivObjectName] != null) {
        window.clearInterval(the_items[theDivObjectName]);
        the_times[theDivObjectName]++
    }
    if (bannerArr.length != 0) {
        var arrTemp = new Array();
        arr = bannerArr.split(",");
        numArr = arr.length / 8;
        index = 0;
        for (i = 0; i < numArr; i++) {
            arrTemp[i] = new Array();
            for (j = 0; j < 8; j++) {
                arrTemp[i][j] = arr[index];
                index++
            }
        }
        var bannerArrLength = arrTemp.length;
        randomBannerIndex = the_times[theDivObjectName] % bannerArrLength;
        if (the_times[theDivObjectName] == bannerArr.length) {
            the_times[theDivObjectName] = 0
        }
        slideBanner(arrTemp, theDivObjectName, randomBannerIndex, tableAttributes, tdAttributes)
    }
    the_items[theDivObjectName] = window.setInterval("doSlideBannerA1('" + bannerArr + "','" + theDivObjectName + "','" + tableAttributes + "', '" + tdAttributes + "'," + times + ")", 10000)
}
function slideBanner(bannerArr, theDivObjectName, bannerIndex, tableAttributes, tdAttributes) {
    if (!bannerIndex) {
        randomIndex = 0
    } else {
        var randomIndex = bannerIndex
    }
    var theOutputString = "";
    switch (bannerArr[randomIndex][0]) {
        case "99":
            if (bannerArr[randomIndex][4] != "") {
                if (bannerArr[randomIndex][5] != "" && bannerArr[randomIndex][5] != "_blank") {
                    theOutputString += "<a href='" + bannerArr[randomIndex][4] + "' target='" + bannerArr[randomIndex][5] + "' onclick='return OpenWindow(\"" + bannerArr[randomIndex][4] + '","' + bannerArr[randomIndex][5] + "\")' ><img src='" + bannerArr[randomIndex][3] + "' border='0' alt='" + bannerArr[randomIndex][6] + "'></a>"
                } else {
                    theOutputString += "<a href='" + bannerArr[randomIndex][4] + "' target='" + bannerArr[randomIndex][5] + "'><img src='" + bannerArr[randomIndex][3] + "' border='0' alt='" + bannerArr[randomIndex][6] + "'></a>"
                }
            } else {
                theOutputString += "<img src='" + bannerArr[randomIndex][3] + "' border='0' alt='" + bannerArr[randomIndex][6] + "'>"
            }
            break;
        case "103":
            theOutputString += '<embed src="' + bannerArr[randomIndex][3] + "?clicktag=" + bannerArr[randomIndex][4] + '" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[randomIndex][1] + '" height="' + bannerArr[randomIndex][2] + '"></embed>';
            break
    }
    var theDivObject = document.getElementById(theDivObjectName);
    theDivObject.innerHTML = theOutputString
}
function Random(N) {
    return Math.floor(N * (Math.random() % 1))
}
function Deal(N) {
    var J, K, Q = new Array(N);
    for (J = 0; J < N; J++) {
        K = Random(J + 1);
        Q[J] = Q[K];
        Q[K] = J
    }
    return Q
}
function BannerAD(bannerArr, tableAttributes, tdAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        if (bannerArr[ranIn[i]][5] != "" && bannerArr[ranIn[i]][5] != "_blank") {
                            theOutputString += "<tr><td class='" + tdAttributes + "'><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' onclick='return OpenWindow(\"" + bannerArr[ranIn[i]][4] + '","' + bannerArr[ranIn[i]][5] + "\")' ><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "'></a></td></tr>"
                        } else {
                            theOutputString += "<tr><td class='" + tdAttributes + "'><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "'></a></td></tr>"
                        }
                    } else {
                        theOutputString += "<tr><td class='" + tdAttributes + "'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "'></td></tr>"
                    }
                    break;
                case "103":
                    theOutputString += '<tr><td class="' + tdAttributes + '"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"><param name="movie" value="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '"> <param name="wmode" value="opaque" /><param name="quality" value="high"><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></object></td></tr>';
                    break
            }
        }
    } else {
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[i][0]) {
                case "99":
                    if (bannerArr[i][4] != "") {
                        if (bannerArr[i][5] != "" && bannerArr[i][5] != "_blank") {
                            theOutputString += "<tr><td class='" + tdAttributes + "'><a href='" + bannerArr[i][4] + "' target='" + bannerArr[i][5] + "' onclick='return OpenWindow(\"" + bannerArr[i][4] + '","' + bannerArr[i][5] + "\")' ><img src='" + bannerArr[i][3] + "' border='0' alt='" + bannerArr[i][6] + "'></a></td></tr>"
                        } else {
                            theOutputString += "<tr><td class='" + tdAttributes + "'><a href='" + bannerArr[i][4] + "' target='" + bannerArr[i][5] + "'><img src='" + bannerArr[i][3] + "' border='0' alt='" + bannerArr[i][6] + "'></a></td></tr>"
                        }
                    } else {
                        theOutputString += "<tr><td class='" + tdAttributes + "'><img src='" + bannerArr[i][3] + "' border='0' alt='" + bannerArr[i][6] + "'></td></tr>"
                    }
                    break;
                case "103":
                    theOutputString += '<tr><td class="' + tdAttributes + '"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' + bannerArr[i][1] + '" height="' + bannerArr[i][2] + '"><param name="movie" value="' + bannerArr[i][3] + "?clicktag=" + bannerArr[i][4] + '"> <param name="wmode" value="opaque" /><param name="quality" value="high"><embed src="' + bannerArr[i][3] + "?clicktag=" + bannerArr[i][4] + '" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[i][1] + '" height="' + bannerArr[i][2] + '"></embed></object></td></tr>';
                    break
            }
        }
    }
    document.write(theOutputString)
}
function BannerADLOGO(bannerArr, tableAttributes, tdAttributes, nColumn, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var totalCol;
    if (isNaN(nColumn)) {
        totalCol = 3
    } else {
        totalCol = nColumn - 1
    }
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var j = 0;
    var theOutputString = "";
    theOutputString += "<table " + tableAttributes + ">";
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            if (j == 0) {
                theOutputString += "<tr>"
            }
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        if (bannerArr[ranIn[i]][5] != "" && bannerArr[ranIn[i]][5] != "_blank") {
                            theOutputString += "<td align='" + tdAttributes + "'><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' onclick='return OpenWindow(\"" + bannerArr[ranIn[i]][4] + '","' + bannerArr[ranIn[i]][5] + "\")' ><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></a></td>"
                        } else {
                            theOutputString += "<td align='" + tdAttributes + "'><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></a></td>"
                        }
                    } else {
                        theOutputString += "<td align='" + tdAttributes + "'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></td>"
                    }
                    break;
                case "103":
                    theOutputString += '<td align="' + tdAttributes + '"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"><param name="movie" value="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '"> <param name="wmode" value="opaque" /><param name="quality" value="high"><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></object></td>';
                    break
            }
            if (j == totalCol) {
                theOutputString += "</tr>";
                j = 0
            } else {
                j++
            }
        }
    }
    theOutputString += "</table>";
    document.write(theOutputString)
}
function BannerADLOGO5(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    theOutputString += "<ul " + tableAttributes + ">";
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<li><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' rel='nofollow'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></a></li>"
                    } else {
                        theOutputString += "<li><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></li>"
                    }
                    break;
                case "103":
                    theOutputString += '<li><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></li>';
                    break
            }
        }
    }
    theOutputString += "</ul>";
    document.write(theOutputString)
}
function BannerADLOGO6(bannerArr, tableAttributes, tableAttributes2, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var totalRow;
    totalRow = parseInt(bannerArr.length / 2) + ((bannerArr.length % 2) != 0 ? 1 : 0);
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    for (var i = 0; i <= bannerArrLength; i++) {
        if (i == 0) {
            theOutputString += "<ul " + tableAttributes + ">"
        }
        if (i == totalRow) {
            theOutputString += "<ul " + tableAttributes2 + ">"
        }
        if (bannerArr[0][7] == 100) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<li><div class='border_logo'><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></a></div></li>"
                    } else {
                        theOutputString += "<li><div class='border_logo'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></div></li>"
                    }
                    break;
                case "103":
                    theOutputString += '<li><div class="border_logo"><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></div></li>';
                    break
            }
        }
        if (i == (totalRow - 1) || i == bannerArrLength) {
            theOutputString += "</ul>"
        }
    }
    document.write(theOutputString)
}
function BannerADLOGO7(bannerArr, tableAttributes, ulAttributes, nColumn, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var totalRow;
    var k = 0;
    if (isNaN(nColumn)) {
        totalRow = (bannerArr.length / 2) + ((bannerArr.length % 2) != 0 ? 1 : 0)
    } else {
        totalRow = parseInt(bannerArr.length / nColumn) + ((bannerArr.length % nColumn) != 0 ? 1 : 0)
    }
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    for (var i = 0; i <= bannerArrLength; i++) {
        if (i == 0 || i == (totalRow * k)) {
            theOutputString += "<ul " + ulAttributes + ">"
        }
        if (bannerArr[0][7] == 100) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<div><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></a></div>"
                    } else {
                        theOutputString += "<div><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></div>"
                    }
                    break;
                case "103":
                    theOutputString += '<div><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></div>';
                    break
            }
        }
        if (i == ((totalRow * (k + 1)) - 1) || i == bannerArrLength) {
            theOutputString += "</ul>";
            if (k <= nColumn) {
                k++
            }
        }
    }
    document.write(theOutputString)
}
function BannerADLOGO11(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    //theOutputString += "<ul " + tableAttributes + ">";
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<div class=\"col-xs-4 col-sm-2 col-md-2\"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' title='"+bannerArr[ranIn[i]][6]+"' rel='nofollow' class=\"single-ad\"><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' ></a><p class=\"salesLogoDesc\"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' title='"+bannerArr[ranIn[i]][6]+"'>"+ bannerArr[ranIn[i]][6] +"</a></p></div>"
                    } else {
                        theOutputString += "<div class=\"col-xs-4 col-sm-2 col-md-2\"><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' ><p class=\"salesLogoDesc\">"+ bannerArr[ranIn[i]][6] +"</p></div>"
                    }
                    break;
                case "103":
                    theOutputString += '<div class="col-xs-4 col-sm-2 col-md-2"><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></div>';
                    break
            }
        }
    }
    //theOutputString += "</ul>";
    document.write(theOutputString)
}

function BannerADLOGO12(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    //theOutputString += "<ul " + tableAttributes + ">";
    //if (bannerArr[0][7] == 100) 
	{
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<div "+tableAttributes+"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' title='"+bannerArr[ranIn[i]][6]+"'><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' ></a><p class=\"salesLogoDesc\"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' title='"+bannerArr[ranIn[i]][6]+"'>"+ bannerArr[ranIn[i]][6] +"</a></p></div>"
                    } else {
                        theOutputString += "<div "+tableAttributes+"><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' ><p class=\"salesLogoDesc\">"+ bannerArr[ranIn[i]][6] +"</p></div>"
                    }
                    break;
                case "103":
                    theOutputString += '<div '+tableAttributes+'><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></div>';
                    break
            }
        }
    }
    //theOutputString += "</ul>";
    document.write(theOutputString)
}

//box 6/12 banners
function BannerADLOGO13(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    theOutputString += "<ul " + tableAttributes + ">";
    //alert(bannerArr[0][3]);
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            var li_class = "class=\"col-xs-6 col-sm-3 col-md-6\"";
            if(i%3==2){
                li_class = "class=\"col-xs-6 col-sm-3 col-md-6\"";    
            }
            
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<li "+li_class+"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' rel='nofollow'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></a></li>"
                    } else {
                        theOutputString += "<li "+li_class+"><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></li>"
                    }
                    break;
                case "103":
                    theOutputString += '<li '+li_class+'><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></li>';
                    break
            }
        }
    }
    theOutputString += "</ul>";
    document.write(theOutputString)
}

function BannerADLOGO14(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    theOutputString += "<ul " + tableAttributes + ">";
    //alert(bannerArr[0][3]);
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            var li_class = "class=\"col-xs-4 col-sm-3 col-md-2\"";
            if(i%3==2){
                li_class = "class=\"col-xs-4 col-sm-3 col-md-2\"";    
            }
            
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<li "+li_class+"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' rel='nofollow'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></a></li>"
                    } else {
                        theOutputString += "<li "+li_class+"><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "' class='" + imgAttributes + "'></li>"
                    }
                    break;
                case "103":
                    theOutputString += '<li '+li_class+'><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></li>';
                    break
            }
        }
    }
    theOutputString += "</ul>";
    document.write(theOutputString)
}
function BannerADLOGO15(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    //theOutputString += "<ul " + tableAttributes + ">";
    //if (bannerArr[0][7] == 100) 
    {
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<div "+tableAttributes+"><div class=\"image\"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' title='"+bannerArr[ranIn[i]][6]+"' rel='nofollow'><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' title='" + bannerArr[ranIn[i]][6] + "' ></a></div></div>"
                    } else {
                        theOutputString += "<div "+tableAttributes+"><div class=\"image\"><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' title='" + bannerArr[ranIn[i]][6] + "' ></div></div>"
                    }
                    break;
                case "103":
                    theOutputString += '<div '+tableAttributes+'><div class=\"image\"><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></div></div>';
                    break
            }
        }
    }
    //theOutputString += "</ul>";
    document.write(theOutputString);
}
function BannerADLOGO16(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    //theOutputString += "<ul " + tableAttributes + ">";
    //if (bannerArr[0][7] == 100) 
    {
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<div "+tableAttributes+"><div class=\"item\"><div class=\"image\"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' title='"+bannerArr[ranIn[i]][6]+"' rel='nofollow'><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' title='" + bannerArr[ranIn[i]][6] + "' ></a></div></div></div>"
                    } else {
                        theOutputString += "<div "+tableAttributes+"><div class=\"item\"><div class=\"image\"><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' title='" + bannerArr[ranIn[i]][6] + "' ></div></div></div>"
                    }
                    break;
                case "103":
                    theOutputString += '<div '+tableAttributes+'><div class=\"item\"><div class=\"image\"><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></div></div></div>';
                    break
            }
        }
    }
    //theOutputString += "</ul>";
    document.write(theOutputString);
}
//box center 5 img & text banners 
function BannerADLOGO11(bannerArr, tableAttributes, imgAttributes) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    //theOutputString += "<ul " + tableAttributes + ">";
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<div class=\"col-xs-4 col-sm-2 col-md-2\"><a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "' title='"+bannerArr[ranIn[i]][6]+"' rel='nofollow' class=\"single-ad\"><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' ><p class=\"salesLogoDesc\">"+ bannerArr[ranIn[i]][6] +"</p></a></div>"
                    } else {
                        theOutputString += "<div class=\"col-xs-4 col-sm-2 col-md-2\"><img src='" + bannerArr[ranIn[i]][3] + "' alt='" + bannerArr[ranIn[i]][6] + "' ><p class=\"salesLogoDesc\">"+ bannerArr[ranIn[i]][6] +"</p></div>"
                    }
                    break;
                case "103":
                    theOutputString += '<div class="col-xs-4 col-sm-2 col-md-2"><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></div>';
                    break
            }
        }
    }
    //theOutputString += "</ul>";
    document.write(theOutputString)
}

function BannerADDIV(bannerArr) {
    var bannerArrLength = bannerArr.length - 1;
    var ranIn = new Array();
    ranIn = Deal(bannerArr.length);
    var theOutputString = "";
    if (bannerArr[0][7] == 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            theOutputString += "<p>";
            switch (bannerArr[ranIn[i]][0]) {
                case "99":
                    if (bannerArr[ranIn[i]][4] != "") {
                        theOutputString += "<a href='" + bannerArr[ranIn[i]][4] + "' target='" + bannerArr[ranIn[i]][5] + "'><img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "'></a>"
                    } else {
                        theOutputString += "<img src='" + bannerArr[ranIn[i]][3] + "' border='0' alt='" + bannerArr[ranIn[i]][6] + "'>"
                    }
                    break;
                case "103":
                    theOutputString += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"><param name="movie" value="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '"><param name="quality" value="high"><param name="wmode" value="opaque"/><embed src="' + bannerArr[ranIn[i]][3] + "?clicktag=" + bannerArr[ranIn[i]][4] + '" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[ranIn[i]][1] + '" height="' + bannerArr[ranIn[i]][2] + '"></embed></object>';
                    break
            }
            theOutputString += "</p>"
        }
    }
    if (bannerArr[0][7] != 100) {
        for (var i = 0; i <= bannerArrLength; i++) {
            theOutputString += "<p>";
            switch (bannerArr[i][0]) {
                case "99":
                    if (bannerArr[i][4] != "") {
                        theOutputString += "<a href='" + bannerArr[i][4] + "' target='" + bannerArr[i][5] + "'><img src='" + bannerArr[i][3] + "' border='0' alt='" + bannerArr[i][6] + "'></a>"
                    } else {
                        theOutputString += "<img src='" + bannerArr[i][3] + "' border='0' alt='" + bannerArr[i][6] + "'>"
                    }
                    break;
                case "103":
                    theOutputString += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' + bannerArr[i][1] + '" height="' + bannerArr[i][2] + '"><param name="movie" value="' + bannerArr[i][3] + "?clicktag=" + bannerArr[i][4] + '"><param name="quality" value="high"><param name="wmode" value="opaque" /><embed src="' + bannerArr[i][3] + "?clicktag=" + bannerArr[i][4] + '" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr[i][1] + '" height="' + bannerArr[i][2] + '"></embed></object>';
                    break
            }
            theOutputString += "</p>"
        }
    }
    document.write(theOutputString)
}
function BannerAD1(bannerArr1, tableAttributes1, tdAttributes1) {
    var theOutputString = "";
    var bannerArrLength = bannerArr1.length;
    var ranInd = new Array();
    ranInd = Deal(bannerArr1.length);
    for (var i = 0; i < bannerArrLength; i++) {
        theOutputString += "<table " + tableAttributes1 + ">";
        theOutputString += "	<tr>";
        theOutputString += "		<td class='" + tdAttributes1 + "'>";
        switch (bannerArr1[ranInd[i]][0]) {
            case "99":
                if (bannerArr1[ranInd[i]][4] != "") {
                    if (bannerArr1[ranInd[i]][5] != "" && bannerArr1[ranInd[i]][5] != "_blank") {
                        theOutputString += "<a href='" + bannerArr1[ranInd[i]][4] + "' target='" + bannerArr1[ranInd[i]][5] + "' onclick='return OpenWindow(\"" + bannerArr1[ranInd[i]][4] + '","' + bannerArr1[ranInd[i]][5] + "\")' ><img src='" + bannerArr1[ranInd[i]][3] + "' border='0' alt='" + bannerArr1[ranInd[i]][6] + "' ></a>"
                    } else {
                        theOutputString += "<a href='" + bannerArr1[ranInd[i]][4] + "' target='" + bannerArr1[ranInd[i]][5] + "'><img src='" + bannerArr1[ranInd[i]][3] + "' border='0' alt='" + bannerArr1[ranInd[i]][6] + "' ></a>"
                    }
                } else {
                    theOutputString += "<img src='" + bannerArr1[ranInd[i]][3] + "' border='0' alt='" + bannerArr1[ranInd[i]][6] + "'>"
                }
                break;
            case "103":
                theOutputString += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' + bannerArr1[ranInd[i]][1] + '" height="' + bannerArr1[ranInd[i]][2] + '"><param name="movie" value="' + bannerArr1[ranInd[i]][3] + "?clicktag=" + bannerArr1[ranInd[i]][4] + '"><param name="quality" value="high"> <param name="wmode" value="opaque" /><embed src="' + bannerArr1[ranInd[i]][3] + "?clicktag=" + bannerArr1[ranInd[i]][4] + '" wmode="opaque" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + bannerArr1[ranInd[i]][1] + '" height="' + bannerArr1[ranInd[i]][2] + '"></embed></object>';
                break
        }
        theOutputString += "		</td>";
        theOutputString += "	</tr>";
        theOutputString += "</table>";
        theOutputString += "<div style='height:" + (parseInt(bannerArr1[ranInd[i]][2]) + 9) + "px;'></div>"
    }
    document.write(theOutputString)
}
function displayRandomBanner(bannerArr, tableAttributes, tdAttributes, tdSpaceAttributes) {
    bannerArr = randomArray(bannerArr);
    var outputedBanner = outputBanner(bannerArr, tableAttributes, tdAttributes, tdSpaceAttributes);
    document.write(outputedBanner)
}
function displayBanner(bannerArr, tableAttributes, tdAttributes, tdSpaceAttributes) {
    var outputedBanner = outputBanner(bannerArr, tableAttributes, tdAttributes, tdSpaceAttributes);
    document.write(outputedBanner)
}
function displayFloatBanner(floatBannerArr, handSide) {
    str = "";
    if (floatBannerArr.length > 0) {
        switch (handSide) {
            case "left":
                str += '<div id="divAdLeft" style="left: -110px; width: 108px; position: absolute; top: 103px" align="right">';
                for (keyIndex in floatBannerArr) {
                    if (floatBannerArr[keyIndex][4] != "") {
                        str += "<a href='" + floatBannerArr[keyIndex][4] + "' target='" + floatBannerArr[keyIndex][5] + "'><img src='" + floatBannerArr[keyIndex][3] + "' border='0' alt='" + floatBannerArr[keyIndex][6] + "'></a><br>"
                    } else {
                        str += "<img src='" + floatBannerArr[keyIndex][3] + "' border='0' alt='" + floatBannerArr[keyIndex][6] + "'><br>"
                    }
                }
                str += "</div>";
                break;
            case "right":
                str += '<div id=divAdRight style="right: -110px; width: 96px; position: absolute; top: 103px; padding-left: 3px;">';
                for (keyIndex in floatBannerArr) {
                    if (floatBannerArr[keyIndex][4] != "") {
                        str += "<a href='" + floatBannerArr[keyIndex][4] + "' target='" + floatBannerArr[keyIndex][5] + "'><img src='" + floatBannerArr[keyIndex][3] + "' border='0' alt='" + floatBannerArr[keyIndex][6] + "'></a><br>"
                    } else {
                        str += "<img src='" + floatBannerArr[keyIndex][3] + "' border='0' alt='" + floatBannerArr[keyIndex][6] + "'><br>"
                    }
                }
                str += "</div>";
                break
        }
    }
    document.write(str);
    switch (handSide) {
        case "left":
            ShowAdDiv("divAdLeft", handSide);
            break;
        case "right":
            ShowAdDiv("divAdRight", handSide);
            break
    }
}
function ShowAdDiv(theBannerDivID, handSide) {
    var theBannerDivObject = document.getElementById(theBannerDivID);
    if (document.body.clientWidth < 980) {
        theBannerDivObject.style.left = -110
    } else {
        switch (handSide) {
            case "left":
                theBannerDivObject.style.left = 0;
                FloatTopDiv2(theBannerDivID);
                break;
            case "right":
                theBannerDivObject.style.left = document.body.clientWidth - 110;
                FloatTopDiv(theBannerDivID);
                break
        }
    }
}
function FloatTopDiv2(leftFloatBanner) {
    startX2 = document.body.clientWidth - 1004, startY2 = 103;
    var ns2 = (navigator.appName.indexOf("Netscape") != -1);
    var d2 = document;
    if (document.body.clientWidth < 980) {
        startX2 = -110
    }
    function ml2(id) {
        var el2 = d2.getElementById ? d2.getElementById(id) : d2.all ? d2.all[id] : d2.layers[id];
        if (d2.layers) {
            el2.style = el2
        }
        el2.sP = function (x, y) {
            this.style.left = x;
            this.style.top = y
        };
        el2.x = startX2;
        el2.y = startY2;
        return el2
    }
    window.stayTopLeft2 = function () {
        if (document.body.clientWidth < 980) {
            ftlObj2.x = -115;
            ftlObj2.y = 0;
            ftlObj2.sP(ftlObj2.x, ftlObj2.y)
        } else {
            if (document.documentElement && document.documentElement.scrollTop) {
                var pY2 = ns2 ? pageYOffset : document.documentElement.scrollTop
            } else {
                if (document.body) {
                    var pY2 = ns2 ? pageYOffset : document.body.scrollTop
                }
            } if (document.body.scrollTop > 103) {
                startY2 = 17
            } else {
                startY2 = 103
            } if (document.body.clientWidth >= 1024) {
                ftlObj2.x = 0;
                ftlObj2.y += (pY2 + startY2 - ftlObj2.y) / 32;
                ftlObj2.sP(ftlObj2.x, ftlObj2.y)
            } else {
                ftlObj2.x = startX2;
                ftlObj2.y += (pY2 + startY2 - ftlObj2.y) / 32;
                ftlObj2.sP(ftlObj2.x, ftlObj2.y)
            }
        }
        setTimeout("stayTopLeft2()", 1)
    };
    ftlObj2 = ml2(leftFloatBanner);
    stayTopLeft2()
}
function FloatTopDiv(rightFloatBanner) {
    startX = document.body.clientWidth - 115, startY = 131;
    var ns = (navigator.appName.indexOf("Netscape") != -1);
    var d = document;
    if (document.body.clientWidth < 980) {
        startX = -115
    }
    function ml(id) {
        var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
        if (d.layers) {
            el.style = el
        }
        el.sP = function (x, y) {
            this.style.left = x;
            this.style.top = y
        };
        el.x = startX;
        el.y = startY;
        return el
    }
    window.stayTopLeft = function () {
        if (document.body.clientWidth < 980) {
            ftlObj.x = -115;
            ftlObj.y = 0;
            ftlObj.sP(ftlObj.x, ftlObj.y)
        } else {
            if (document.documentElement && document.documentElement.scrollTop) {
                var pY = ns ? pageYOffset : document.documentElement.scrollTop
            } else {
                if (document.body) {
                    var pY = ns ? pageYOffset : document.body.scrollTop
                }
            } if (document.body.scrollTop > 131) {
                startY = 10
            } else {
                startY = 131
            } if (document.body.clientWidth >= 1024) {
                ftlObj.x = document.body.clientWidth - 110;
                ftlObj.y += (pY + startY - ftlObj.y) / 32;
                ftlObj.sP(ftlObj.x, ftlObj.y)
            } else {
                ftlObj.x = startX;
                ftlObj.y += (pY + startY - ftlObj.y) / 32;
                ftlObj.sP(ftlObj.x, ftlObj.y)
            }
        }
        setTimeout("stayTopLeft()", 1)
    };
    ftlObj = ml(rightFloatBanner);
    stayTopLeft()
}
function getRandom(theNumber) {
    return Math.round(Math.random() * theNumber)
}
function createNumRand(num) {
    rate = 1;
    while (num > 1) {
        rate *= 10;
        num /= 10
    }
    num *= rate;
    return (Math.floor(Math.random() * rate) % num)
};