import './Nav.css' 
import React from 'react';

//navigation bar at the top of each web page
class NavBar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="navigation-container">
                <ul className="navigation-btns">
                    <li id="nav-btn1"><svg id="home-btn" xmlns="http://www.w3.org/2000/svg" version="1.0" 
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#C6C6C6" stroke="none">
<path d="M2397 5096 c-32 -13 -75 -36 -95 -50 -21 -14 -526 -515 -1124 -1113 -876 -878 -1091 -1098 -1112 -1140 -96 -194 -64 -406 83 -554 92
 -91 209 -139 343 -139 l68 0 0 -800 c0 -541 4 -816 11 -852 38 -182 185 -347 367 -410 66 -23 71 -23 554 -23 476 0 487 0 514 21 15 11 37 33 
 48 48 21 27 21 40 26 695 l5 668 30 49 c38 61 115 110 189 119 28 4 168 5 311 3 l260 -3 53 -29 c50 -28 82 -61 113 -116 11 -21 15 -144 19 -692
  5 -654 5 -667 26 -694 11 -15 33 -37 48 -48 27 -21 38 -21 514 -21 483 0 488 0 554 23 182 63 329 228 367 410 7 36 11 311 11 852 l0 800 68 0 c188 0 
  352 100 433 265 34 69 34 71 34 205 0 228 115 93 -1169 1376 -1276 1277 -1148 1167 -1366 1172 -113 2 -130 0 -183 -22z m247 -286 c59 -28 2149 -2121 
  2171 -2172 21 -51 19 -94 -6 -144 -37 -77 -68 -88 -261 -94 -181 -5 -194 -9 -242 -74 -21 -27 -21 -38 -26 -934 l-5 -907 -28 -47 c-15 -26 -42 -59 -60 -72
   -70 -54 -91 -56 -473 -56 l-354 0 0 560 c0 367 -4 577 -11 612 -39 188 -190 350 -384 411 -66 21 -88 22 -395 22 -358 0 -376 -2 -504 -67 -127 -64 -245 -222
    -275 -366 -7 -35 -11 -245 -11 -612 l0 -560 -354 0 c-382 0 -403 2 -473 56 -18 13 -45 46 -60 72 l-28 47 -5 907 c-5 896 -5 907 -26 934 -48 65 -61 69 -242 74 -193 6 -224 17 -261 94 -25 50 -27 93 -6 144 21 50 2112 2143 2170 2172 51 25 98 25 149 0z"/>
</g>
</svg></li>
                    <li id="nav-btn2"><svg id="symptom-btn" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#C6C6C6" stroke="none">
<path d="M420 4789 c-14 -5 -36 -20 -48 -32 -55 -51 -52 95 -52 -2200 l0 -2124 23 -34 c12 -18 38 -44 56 -56 l34 -23 2127 0 2127 0 34 23 c104 70 106 197 6 271 l-28 21 -2030 3 -2029 2 0 2013 0 2013 -22 44 c-13 24 -35 53 -50 63 -31 23 -112 32 -148 16z"/>
<path d="M4580 3749 c-14 -5 -401 -386 -860 -845 l-836 -835 -354 390 c-385 424 -391 429 -478 416 -30 -4 -56 -18 -85 -43 -270 -240 -985 -905 -995 -926 -59 -129 80 -269 211 -212 18 8 183 153 368 323 185 169 377 345 427 391 l91 83 351 -386 c194 -213 366 -395 384 -406 37 -22 94 -25 139 -5 19 8 408 390 934 917 790 792 903 909 914 947 36 123 -90 238 -211 191z"/>
</g>
</svg></li>
                    <li id="nav-btn3"><svg id="chat-btn"xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#C6C6C6" stroke="none">
<path d="M2323 5110 c-598 -58 -1146 -316 -1571 -740 -404 -404 -651 -906 -734 -1495 -19 -140 -16 -515 6 -660 43 -286 115 -522 236 -772 l78 -162 -163 -507 c-90 -280 -167 -526 -171 -547 -20 -124 99 -243 223 -223 21 4 267 81 547 171 l507 163 162 -78 c250 -121 486 -193 772 -236 145 -22 520 -25 660 -6 589 83 1087 328 1493 732 397 397 640 882 729 1460 24 161 24 539 0 700 -89 577 -330 1059 -727 1458 -394 395 -885 641 -1450 727 -125 19 -468 27 -597 15z m438 -400 c330 -33 694 -156 943 -320 445 -291 750 -681 905 -1156 119 -364 141 -711 70 -1089 -45 -235 -167 -544 -289 -729 -288 -439 -675 -745 -1142 -901 -607 -203 -1226 -135 -1808 197 -112 64 -114 63 -555 -80 -203 -66 -371 -120 -372 -119 -1 1 53 169 119 372 149 457 147 437 61 590 -184 327 -274 640 -290 1010 -40 945 576 1827 1483 2124 293 96 586 129 875 101z"/>
<path d="M1472 2793 c-23 -8 -62 -34 -86 -59 -100 -100 -100 -248 0 -348 100 -100 248 -100 348 0 188 187 -11 496 -262 407z"/>
<path d="M2472 2793 c-23 -8 -62 -34 -86 -59 -100 -100 -100 -248 0 -348 100 -100 248 -100 348 0 188 187 -11 496 -262 407z"/>
<path d="M3472 2793 c-23 -8 -62 -34 -86 -59 -100 -100 -100 -248 0 -348 100 -100 248 -100 348 0 188 187 -11 496 -262 407z"/>
</g>
</svg></li>
                    <li id="nav-btn4"><svg id="network-btn" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#C6C6C6" stroke="none">
<path d="M2425 4369 c-298 -44 -536 -248 -627 -539 -33 -108 -33 -311 0 -420 102 -327 391 -540 734 -541 132 0 213 18 333 76 160 77 268 185 350 347 61 121 78 209 73 361 -4 98 -10 138 -32 202 -39 114 -98 209 -185 296 -123 123 -268 194 -444 218 -88 12 -116 12 -202 0z m295 -189 c180 -61 323 -204 381 -382 31 -95 34 -254 5 -338 -73 -216 -221 -356 -434 -411 -193 -49 -397 4 -548 145 -79 73 -124 143 -161 248 -34 97 -36 249 -4 348 63 198 250 369 446 409 81 16 240 7 315 -19z"/>
<path d="M3980 3845 c-202 -46 -378 -207 -441 -405 -25 -76 -30 -238 -10 -310 27 -98 81 -190 154 -265 82 -82 137 -117 238 -151 151 -51 303 -39 455 35 398 197 435 753 67 1005 -132 90 -312 125 -463 91z m251 -171 c76 -23 128 -56 188 -119 199 -210 131 -543 -136 -667 -174 -82 -399 -26 -515 127 -63 82 -82 144 -83 260 0 92 3 105 32 168 52 110 151 196 268 233 57 18 182 17 246 -2z"/>
<path d="M891 3804 c-150 -32 -286 -124 -370 -249 -158 -236 -126 -542 76 -741 104 -103 274 -174 418 -174 249 0 489 178 566 420 32 98 30 250 -4 348 -36 103 -81 174 -159 247 -142 135 -338 190 -527 149z m299 -191 c120 -57 194 -142 232 -267 60 -196 -38 -409 -229 -499 -129 -60 -302 -47 -417 33 -61 41 -125 114 -151 173 -104 228 10 492 251 577 47 16 78 20 154 17 82 -2 104 -7 160 -34z"/>
<path d="M2440 2763 c-306 -30 -599 -157 -813 -353 l-68 -63 -97 46 c-118 56 -199 81 -317 97 -469 66 -938 -224 -1092 -675 -41 -120 -53 -221 -53 -435 0 -197 0 -198 28 -251 20 -39 41 -62 77 -84 l48 -30 507 -3 508 -3 6 -40 c9 -58 38 -110 86 -153 85 -77 -22 -71 1300 -71 1322 0 1215 -6 1300 71 57 51 82 105 88 186 l5 67 501 3 c356 2 509 7 527 15 44 19 101 75 120 118 16 34 19 68 19 236 0 213 -12 314 -53 434 -104 305 -346 541 -652 638 -277 87 -600 48 -839 -100 l-49 -31 -62 53 c-283 240 -668 364 -1025 328z m326 -178 c500 -86 892 -463 995 -957 17 -84 22 -148 25 -351 5 -269 0 -313 -43 -346 -26 -21 -31 -21 -1183 -21 -1145 0 -1158 0 -1183 20 -43 34 -47 66 -43 340 3 214 7 272 25 358 103 490 492 868 986 956 108 19 312 20 421 1z m1553 -216 c298 -76 534 -313 611 -613 17 -67 20 -111 20 -286 0 -147 -3 -209 -12 -218 -9 -9 -133 -12 -499 -12 l-486 0 -6 173 c-9 250 -47 403 -153 608 -26 51 -71 125 -100 165 l-53 73 33 21 c176 108 431 143 645 89z m-3097 -63 c85 -21 218 -78 218 -92 0 -3 -19 -32 -41 -66 -59 -86 -144 -268 -174 -373 -39 -134 -55 -262 -55 -437 l0 -158 -489 0 c-417 0 -490 2 -501 15 -9 11 -11 73 -8 242 4 204 7 236 27 298 98 298 334 514 636 580 103 23 278 19 387 -9z"/>
</g>
</svg></li>
                </ul>
                <div id ="nav-btn5">
                    <svg id="profile-btn" svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#C6C6C6" stroke="none">
                    <path d="M2335 5105 c-273 -42 -517 -172 -708 -375 -210 -223 -319 -481 -334 -790 -21 -432 191 -845 557 -1084 180 -118 353 -178 563 -195 389 -30 721 92 989 365 262 267 379 596 347 974 -28 324 -171 603 -419 817 -196 168 -376 252 -625 288 -120 17 -260 18 -370 0z m426 -314 c157 -40 275 -109 407 -236 172 -163 259 -343 282 -576 27 -276 -58 -528 -245 -728 -116 -124 -287 -229 -432 -266 -215 -54 -471 -31 -655 60 -251 124 -437 356 -505 630 -26 105 -23 342 6 450 77 290 329 559 609 650 152 49 379 56 533 16z"/>
                    <path d="M1427 2639 c-153 -16 -311 -74 -436 -158 -312 -212 -514 -686 -561 -1316 -26 -354 -5 -529 86 -712 50 -102 145 -214 242 -286 74 -54 198 -110 307 -138 l90 -24 1400 0 1400 0 90 23 c316 83 537 296 616 597 41 155 36 525 -12 817 -105 650 -371 1040 -792 1162 -96 28 -268 49 -319 39 -49 -9 -117 -45 -271 -144 -166 -107 -192 -121 -316 -166 -146 -53 -255 -74 -390 -74 -140 0 -248 20 -390 70 -134 48 -140 51 -350 184 -110 70 -192 115 -224 124 -56 14 -56 14 -170 2z m260 -395 c188 -121 267 -160 432 -214 430 -141 869 -73 1283 198 187 123 183 121 262 111 363 -46 590 -351 686 -924 39 -236 51 -565 25 -690 -42 -201 -178 -343 -386 -402 -60 -17 -139 -18 -1434 -18 -1298 0 -1373 1 -1435 18 -149 42 -278 144 -338 267 -52 106 -65 195 -57 410 7 217 17 318 52 495 26 138 87 334 130 419 129 256 304 396 531 425 37 5 71 9 75 10 4 0 82 -47 174 -105z"/>
                    </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default NavBar;