(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(`/*! tailwindcss v4.1.13 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-100:oklch(96.2% .044 156.743);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-blue-500:oklch(62.3% .214 259.815);--color-rose-400:oklch(71.2% .194 13.428);--color-rose-500:oklch(64.5% .246 16.439);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--radius-4xl:2rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--animate-bounce:bounce 1s infinite;--blur-2xl:40px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary-400:"var(--color-primary-400)";--color-primary-500:"var(--color-primary-500)";--color-primary-600:"var(--color-primary-600)";--color-secondary-400:"var(--color-secondary-400)";--color-secondary-500:"var(--color-secondary-500)";--color-secondary-600:"var(--color-secondary-600)";--color-tertiary-400:"var(--color-tertiary-400)";--color-tertiary-500:"var(--color-tertiary-500)";--color-tertiary-600:"var(--color-tertiary-600)";--color-body-100:"var(--color-body-100)";--color-body-200:"var(--color-body-200)";--color-body-300:"var(--color-body-300)";--color-toggle-100:"var(--color-toggle-100)";--color-toggle-200:"var(--color-toggle-200)";--animate-pop:pop .5s ease-out forwards}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6a7282;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(55.1%25 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#155dfc;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6a7282;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}*{scrollbar-color:initial;scrollbar-width:initial}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.\\!collapse{visibility:collapse!important}.collapse{visibility:collapse}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.-top-1{top:calc(var(--spacing)*-1)}.top-0{top:calc(var(--spacing)*0)}.top-1\\.5{top:calc(var(--spacing)*1.5)}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-6{top:calc(var(--spacing)*6)}.-right-1{right:calc(var(--spacing)*-1)}.-right-8{right:calc(var(--spacing)*-8)}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-4{right:calc(var(--spacing)*4)}.right-10{right:calc(var(--spacing)*10)}.bottom-10{bottom:calc(var(--spacing)*10)}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-3{left:calc(var(--spacing)*3)}.z-10{z-index:10}.z-50{z-index:50}.z-\\[9999999\\]{z-index:9999999}.col-3{grid-column:3}.col-4{grid-column:4}.col-6{grid-column:6}.col-8{grid-column:8}.col-9{grid-column:9}.col-12{grid-column:12}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:50rem){.container{max-width:50rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}@media (min-width:120rem){.container{max-width:120rem}}@media (min-width:140rem){.container{max-width:140rem}}.m-1{margin:calc(var(--spacing)*1)}.m-6{margin:calc(var(--spacing)*6)}.mx-3{margin-inline:calc(var(--spacing)*3)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing)*2)}.my-4{margin-block:calc(var(--spacing)*4)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.scrollbar-thin::-webkit-scrollbar-track{background-color:var(--scrollbar-track);border-radius:var(--scrollbar-track-radius)}.scrollbar-thin::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:var(--scrollbar-thumb-radius)}.scrollbar-thin::-webkit-scrollbar-corner{background-color:var(--scrollbar-corner);border-radius:var(--scrollbar-corner-radius)}.scrollbar-thin{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb,initial)var(--scrollbar-track,initial)}.scrollbar-thin::-webkit-scrollbar{width:8px;height:8px;display:block}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-flex{display:inline-flex}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-15{height:calc(var(--spacing)*15)}.h-16{height:calc(var(--spacing)*16)}.h-\\[72px\\]{height:72px}.h-auto{height:auto}.h-dvh{height:100dvh}.h-full{height:100%}.h-screen{height:100vh}.max-h-12{max-height:calc(var(--spacing)*12)}.min-h-0{min-height:calc(var(--spacing)*0)}.min-h-10{min-height:calc(var(--spacing)*10)}.w-1\\/3{width:33.3333%}.w-1\\/4{width:25%}.w-1\\/5{width:20%}.w-2{width:calc(var(--spacing)*2)}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-2\\/3{width:66.6667%}.w-2\\/5{width:40%}.w-3{width:calc(var(--spacing)*3)}.w-3\\/5{width:60%}.w-4{width:calc(var(--spacing)*4)}.w-4\\/5{width:80%}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-7{width:calc(var(--spacing)*7)}.w-8{width:calc(var(--spacing)*8)}.w-9{width:calc(var(--spacing)*9)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-14{width:calc(var(--spacing)*14)}.w-16{width:calc(var(--spacing)*16)}.w-20{width:calc(var(--spacing)*20)}.w-24{width:calc(var(--spacing)*24)}.w-\\[85\\%\\]{width:85%}.w-auto{width:auto}.w-full{width:100%}.w-max{width:max-content}.w-screen{width:100vw}.max-w-7xl{max-width:var(--container-7xl)}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-4{--tw-translate-x:calc(var(--spacing)*-4);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-4{--tw-translate-x:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-6{--tw-translate-y:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-50{--tw-translate-y:calc(var(--spacing)*-50);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-4{--tw-translate-y:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-6{--tw-translate-y:calc(var(--spacing)*6);translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-70{--tw-scale-x:70%;--tw-scale-y:70%;--tw-scale-z:70%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-75{--tw-scale-x:75%;--tw-scale-y:75%;--tw-scale-z:75%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-120{--tw-scale-x:120%;--tw-scale-y:120%;--tw-scale-z:120%;scale:var(--tw-scale-x)var(--tw-scale-y)}.rotate-0{rotate:none}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-pop{animation:var(--animate-pop)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-\\[120px_1fr\\]{grid-template-columns:120px 1fr}.grid-cols-\\[250px_1fr\\]{grid-template-columns:250px 1fr}.grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-0\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*.5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-0\\.5{column-gap:calc(var(--spacing)*.5)}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*3)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-x-reverse)))}.self-start{align-self:flex-start}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-4xl{border-radius:var(--radius-4xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-md{border-top-left-radius:var(--radius-md);border-top-right-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-body-100{border-color:var(--color-body-100)}.border-body-200{border-color:var(--color-body-200)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-primary-400\\/10{border-color:color-mix(in srgb,"var(--color-primary-400)" 10%,transparent)}@supports (color:color-mix(in lab,red,red)){.border-primary-400\\/10{border-color:color-mix(in oklab,var(--color-primary-400)10%,transparent)}}.border-primary-500{border-color:var(--color-primary-500)}.border-red-200{border-color:var(--color-red-200)}.border-rose-400{border-color:var(--color-rose-400)}.border-rose-500{border-color:var(--color-rose-500)}.border-transparent{border-color:#0000}.border-white{border-color:var(--color-white)}.bg-black\\/10{background-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.bg-black\\/10{background-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.bg-body-100{background-color:var(--color-body-100)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-green-100{background-color:var(--color-green-100)}.bg-primary-400{background-color:var(--color-primary-400)}.bg-primary-400\\/10{background-color:color-mix(in srgb,"var(--color-primary-400)" 10%,transparent)}@supports (color:color-mix(in lab,red,red)){.bg-primary-400\\/10{background-color:color-mix(in oklab,var(--color-primary-400)10%,transparent)}}.bg-primary-500{background-color:var(--color-primary-500)}.bg-primary-500\\/10{background-color:color-mix(in srgb,"var(--color-primary-500)" 10%,transparent)}@supports (color:color-mix(in lab,red,red)){.bg-primary-500\\/10{background-color:color-mix(in oklab,var(--color-primary-500)10%,transparent)}}.bg-primary-600{background-color:var(--color-primary-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-secondary-500{background-color:var(--color-secondary-500)}.bg-tertiary-500{background-color:var(--color-tertiary-500)}.bg-toggle-200{background-color:var(--color-toggle-200)}.bg-white{background-color:var(--color-white)}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-zinc-50{background-color:var(--color-zinc-50)}.bg-zinc-100{background-color:var(--color-zinc-100)}.stroke-primary-500{stroke:var(--color-primary-500)}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-5{padding-top:calc(var(--spacing)*5)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pb-8{padding-bottom:calc(var(--spacing)*8)}.pl-1{padding-left:calc(var(--spacing)*1)}.pl-6{padding-left:calc(var(--spacing)*6)}.text-center{text-align:center}.text-right{text-align:right}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.break-words{overflow-wrap:break-word}.whitespace-nowrap{white-space:nowrap}.text-blue-500{color:var(--color-blue-500)}.text-body-100{color:var(--color-body-100)}.text-body-200{color:var(--color-body-200)}.text-body-300{color:var(--color-body-300)}.text-current{color:currentColor}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-primary-400{color:var(--color-primary-400)}.text-primary-500{color:var(--color-primary-500)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-toggle-100{color:var(--color-toggle-100)}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-800{color:var(--color-yellow-800)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.placeholder-transparent::placeholder{color:#0000}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-70{opacity:.7}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-primary-500{--tw-shadow-color:"var(--color-primary-500)"}@supports (color:color-mix(in lab,red,red)){.shadow-primary-500{--tw-shadow-color:color-mix(in oklab,var(--color-primary-500)var(--tw-shadow-alpha),transparent)}}.ring-primary-500{--tw-ring-color:var(--color-primary-500)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-2xl{--tw-backdrop-blur:blur(var(--blur-2xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.scrollbar-thumb-gray-300{--scrollbar-thumb:oklch(87.2% .01 258.338)}.scrollbar-track-gray-50{--scrollbar-track:oklch(98.5% .002 247.839)}.not-last\\:mb-3:not(:last-child){margin-bottom:calc(var(--spacing)*3)}@media (hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}}.peer-placeholder-shown\\:top-2\\.5:is(:where(.peer):placeholder-shown~*){top:calc(var(--spacing)*2.5)}.peer-placeholder-shown\\:text-base:is(:where(.peer):placeholder-shown~*){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.peer-placeholder-shown\\:text-gray-400:is(:where(.peer):placeholder-shown~*){color:var(--color-gray-400)}.peer-focus\\:top-1\\.5:is(:where(.peer):focus~*){top:calc(var(--spacing)*1.5)}.peer-focus\\:text-sm:is(:where(.peer):focus~*){font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.peer-focus\\:text-primary-500:is(:where(.peer):focus~*){color:var(--color-primary-500)}.last\\:mb-12:last-child{margin-bottom:calc(var(--spacing)*12)}@media (hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:border-primary-500:hover{border-color:var(--color-primary-500)}.hover\\:border-transparent:hover{border-color:#0000}.hover\\:bg-body-100:hover{background-color:var(--color-body-100)}.hover\\:bg-primary-400:hover{background-color:var(--color-primary-400)}.hover\\:bg-primary-500:hover{background-color:var(--color-primary-500)}.hover\\:bg-primary-600:hover{background-color:var(--color-primary-600)}.hover\\:bg-tertiary-600\\/70:hover{background-color:color-mix(in srgb,"var(--color-tertiary-600)" 70%,transparent)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-tertiary-600\\/70:hover{background-color:color-mix(in oklab,var(--color-tertiary-600)70%,transparent)}}.hover\\:bg-white\\/80:hover{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/80:hover{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.hover\\:text-body-100:hover{color:var(--color-body-100)}.hover\\:text-primary-500:hover{color:var(--color-primary-500)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:border-primary-500:focus{border-color:var(--color-primary-500)}.focus\\:ring-primary-500:focus{--tw-ring-color:var(--color-primary-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:translate-y-0\\.5:active{--tw-translate-y:calc(var(--spacing)*.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.active\\:outline-0:active{outline-style:var(--tw-outline-style);outline-width:0}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media (min-width:40rem){.sm\\:translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.sm\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.sm\\:gap-4{gap:calc(var(--spacing)*4)}.sm\\:rounded-2xl{border-radius:var(--radius-2xl)}.sm\\:rounded-3xl{border-radius:var(--radius-3xl)}.sm\\:rounded-4xl{border-radius:var(--radius-4xl)}.sm\\:rounded-full{border-radius:3.40282e38px}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:rounded-md{border-radius:var(--radius-md)}.sm\\:rounded-none{border-radius:0}.sm\\:rounded-sm{border-radius:var(--radius-sm)}.sm\\:rounded-xl{border-radius:var(--radius-xl)}}@media (min-width:48rem){.md\\:hidden{display:none}.md\\:h-5{height:calc(var(--spacing)*5)}.md\\:h-\\[80dvh\\]{height:80dvh}.md\\:w-1\\/4{width:25%}.md\\:w-5{width:calc(var(--spacing)*5)}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}}@media (min-width:50rem){.lg\\:h-8{height:calc(var(--spacing)*8)}.lg\\:h-\\[640px\\]{height:640px}.lg\\:w-8{width:calc(var(--spacing)*8)}.lg\\:w-auto{width:auto}.lg\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@media (min-width:80rem){.xl\\:h-\\[620px\\]{height:620px}}@media (min-width:96rem){.\\32xl\\:h-\\[720px\\]{height:720px}}@container (min-width:24rem){.\\@sm\\:w-full{width:100%}.\\@sm\\:px-0{padding-inline:calc(var(--spacing)*0)}}@container (min-width:28rem){.\\@md\\:w-\\[90\\%\\]{width:90%}}@container (min-width:32rem){.\\@lg\\:col-span-1{grid-column:span 1/span 1}.\\@lg\\:col-span-2{grid-column:span 2/span 2}.\\@lg\\:col-span-3{grid-column:span 3/span 3}.\\@lg\\:col-span-4{grid-column:span 4/span 4}.\\@lg\\:col-span-5{grid-column:span 5/span 5}.\\@lg\\:col-span-6{grid-column:span 6/span 6}.\\@lg\\:col-span-7{grid-column:span 7/span 7}.\\@lg\\:col-span-8{grid-column:span 8/span 8}.\\@lg\\:col-span-9{grid-column:span 9/span 9}.\\@lg\\:col-span-10{grid-column:span 10/span 10}.\\@lg\\:col-span-11{grid-column:span 11/span 11}.\\@lg\\:col-span-12{grid-column:span 12/span 12}.\\@lg\\:w-\\[82\\%\\]{width:82%}.\\@lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.\\@lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@container (min-width:36rem){.\\@xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@container (min-width:48rem){.\\@3xl\\:mx-8{margin-inline:calc(var(--spacing)*8)}.\\@3xl\\:block{display:block}.\\@3xl\\:grid{display:grid}.\\@3xl\\:hidden{display:none}.\\@3xl\\:h-5{height:calc(var(--spacing)*5)}.\\@3xl\\:w-5{width:calc(var(--spacing)*5)}.\\@3xl\\:w-\\[90\\%\\]{width:90%}.\\@3xl\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.\\@3xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@3xl\\:grid-cols-\\[250px_1fr\\]{grid-template-columns:250px 1fr}.\\@3xl\\:rounded-lg{border-radius:var(--radius-lg)}.\\@3xl\\:px-4{padding-inline:calc(var(--spacing)*4)}.\\@3xl\\:px-6{padding-inline:calc(var(--spacing)*6)}.\\@3xl\\:px-8{padding-inline:calc(var(--spacing)*8)}.\\@3xl\\:py-3{padding-block:calc(var(--spacing)*3)}.\\@3xl\\:py-12{padding-block:calc(var(--spacing)*12)}}@container (min-width:64rem){.\\@5xl\\:col-span-1{grid-column:span 1/span 1}.\\@5xl\\:col-span-2{grid-column:span 2/span 2}.\\@5xl\\:col-span-3{grid-column:span 3/span 3}.\\@5xl\\:w-\\[72\\%\\]{width:72%}.\\@5xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@5xl\\:grid-cols-\\[320px_1fr\\]{grid-template-columns:320px 1fr}}}[x-cloak]{display:none!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}@keyframes pop{0%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1.2)}to{opacity:1;transform:scale(1)}}`)),document.head.appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var BookingWidget=(function(nn){"use strict";var $i;const hr=`<div x-show="modal.status" tabindex="-1" x-transition:enter="ease-out duration-300"
    x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200"
    x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
    x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    class="relative max-w-7xl h-dvh md:h-[80dvh] lg:h-[640px] xl:h-[620px] 2xl:h-[720px] overflow-hidden bg-white mx-auto"
    :class="[modal.type === 'INPAGE' ? \`w-full \${$store.theme.radius}\` : \`w-full @md:w-[90%] @lg:w-[82%] @3xl:w-[90%] @5xl:w-[72%] sm:\${$store.theme.radius}\`]">
    <div class="w-full h-full min-h-0 @3xl:grid transition-all duration-200 ease-in-out"
        :class="[currentStep !== 6 ? collapse && currentStep < 4 ? 'grid-cols-[120px_1fr]' : currentStep >= 4 ? '@3xl:grid-cols-[250px_1fr] @5xl:grid-cols-[320px_1fr]' : 'grid-cols-[250px_1fr]' : 'grid-cols-1']"
        x-init="handleResize()">
        <!-- STEPPER -->
        <div :class="['hidden @3xl:block relative space-y-4 bg-primary-500 text-body-100 h-dvh md:h-[80dvh] lg:h-[640px] xl:h-[620px] 2xl:h-[720px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50', collapse ? 'p-4 @3xl:px-4 @3xl:py-12' : 'p-6 @3xl:px-8 @3xl:py-12']"
            x-show="currentStep < 4">
            <div class="flex" :class="collapse ? 'justify-center' : 'justify-end'">
                <button aria-label="Collapse sidebar" class="cursor-pointer text-current" @click="collapse = !collapse">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-panel-left-close-icon lucide-panel-left-close transform transition-transform duration-300 ease-out"
                        :class="collapse ? 'rotate-180' : 'rotate-0'">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 3v18" />
                        <path d="m16 15-3-3 3-3" />
                    </svg>
                </button>
            </div>
            <template x-for="(step, index) in menuSteps" :key="index">
                <div class="p-3 bg-tertiary-500 text-body-300 rounded-lg flex flex-col last:mb-12"
                    :class="(isStepCompleted(step.key) && isInNavigation(step.key)) ? 'cursor-pointer hover:bg-white/80 active:scale-95 transition-all' : 'cursor-not-allowed'"
                    @click="if (isStepCompleted(step.key) && isInNavigation(step.key)) goToStepByKey(step.key)"
                    :data-test-step-menu="step.key">
                    <div class="flex items-center gap-2 relative">
                        <span x-html="step.icon" class="text-xl text-current"></span>

                        <div class="w-full flex justify-between items-center"
                            :class="collapse ? 'absolute top-0 -right-8 scale-70' : ''">
                            <h2 x-show="!collapse" x-bind:="transitionSlideInFromLeft" x-text="step.labels?.menu || step.title"
                                class="text-sm font-semibold text-current"></h2>

                            <span x-show="!isStepCompleted(step.key)" class="transition-all duration-500 transform"
                                :class="currentKey === step.key ? 'text-primary-500 animate-spin' : 'text-primary-400 scale-100'"
                                style="animation-duration: 5s">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle-dashed-icon lucide-circle-dashed">
                                    <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
                                    <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
                                    <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
                                    <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
                                    <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
                                    <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
                                    <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
                                    <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
                                </svg>
                            </span>

                            <span x-show="isStepCompleted(step.key)"
                                x-transition:enter="transition transform duration-200 ease-out"
                                x-transition:enter-start="opacity-0 scale-75"
                                x-transition:enter-end="opacity-100 scale-100" class="text-xl text-primary-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <!-- PRODUCT SELECTION VIEW -->
                    <div x-show="!collapse && step.key === 'service'">
                        <template x-for="(product, index) in summary.products" :key="product.id">
                            <div class="space-y-0.5" x-data="{ show: false }"
                                x-init="setTimeout(() => show = true, index * 100)">
                                <p x-show="show && product.plugin_text" x-bind="transitionSlideInFromLeft"
                                    class="text-sm text-body-300 ml-1" x-text="product.plugin_text"></p>
                            </div>
                        </template>
                    </div>

                    <!-- LOCATION SELECTION VIEW -->
                    <div x-show="!collapse && step.key === 'location' && summary.locations">
                        <template x-for="(location, index) in summary.locations" :key="location.id">
                            <div class="space-y-0.5" x-data="{ show: false }"
                                x-init="setTimeout(() => show = true, index * 100)">
                                <p x-show="show && location.name" x-bind="transitionSlideInFromLeft"
                                    class="text-sm text-body-300 ml-1"
                                    x-text="\`\${location.street || ''}, \${location.city || ''} \${location.postcode || ''}\`">
                                </p>
                            </div>
                        </template>
                    </div>

                    <!-- EMPLOYEE SELECTION VIEW -->
                    <p class="text-sm text-body-300 ml-1"
                        x-show="!collapse && step.key === 'employee' && summary.employee?.fullname"
                        x-bind="transitionSlideInFromLeft" x-text="summary.employee?.fullname"></p>

                    <!-- SCHDULE SELECTION VIEW -->
                    <p class="text-sm text-body-300 ml-1"
                        x-show="(summary.slot) && step.key === 'schedule' && !collapse"
                        x-bind="transitionSlideInFromLeft"
                        x-text="summary.date && summary.slot ? \`\${summary.date} — \${$store.utils.extractHourMinute(summary.slot.start)}\` : summary.date ? summary.date : summary.slot ? $store.utils.extractHourMinute(summary.slot.start) : ''">
                    </p>

                </div>
            </template>

            <p x-show="!collapse"
                class="absolute bottom-10 left-0 text-center w-full text-body-100 opacity-30 font-medium text-sm uppercase"
                x-html="modal.menuLabels?.footer || ''"></p>
        </div>

        <!-- SUMMARY -->
        <div class="h-full relative hidden @3xl:block mb-4 space-y-1 bg-primary-500 text-body-100 px-6 py-12 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50"
            x-show="currentStep === 4 || currentStep === 5">
            <div class="bg-tertiary-500 text-body-300 rounded-xl p-8 px-2">
                <h1 class="text-xl font-bold text-current px-4 mb-2" x-text="modal.menuLabels?.summary">
                </h1>

                <!-- Product -->
                <div x-data="{ show: false }" x-show="show" x-bind="transitionSlideInFromLeft"
                    x-effect="if (currentStep >= 4) setTimeout(() => show = true, 200); else show = false"
                    @click="goToStep(1)"
                    class="flex flex-col gap-3 hover:bg-tertiary-600/70 transition-all duration-300 cursor-pointer p-2 px-4 rounded-lg">
                    <div class="flex justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 flex items-center justify-center text-current">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-hand-heart-icon lucide-hand-heart w-5 h-5">
                                    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                                    <path
                                        d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                    <path d="m2 15 6 6" />
                                    <path
                                        d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                                </svg>
                            </div>

                            <h4 class="font-semibold text-current text-sm" x-text="getStepByKey('service').labels.menu">
                            </h4>
                        </div>
                        <div class="flex gap-2">
                            <div x-show="summary.totalTime" class="flex gap-0.5 items-center text-current">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="w-4 h-4 lucide lucide-alarm-clock-icon lucide-alarm-clock">
                                    <circle cx="12" cy="13" r="8" />
                                    <path d="M12 9v4l2 2" />
                                    <path d="M5 3 2 6" />
                                    <path d="m22 6-3-3" />
                                    <path d="M6.38 18.7 4 21" />
                                    <path d="M17.64 18.67 20 21" />
                                </svg>
                                <span class="font-semibold"
                                    x-text="$store.utils.formatDuration(summary.totalTime)"></span>
                            </div>
                            <div x-show="getStepByKey('service')?.showPrice && summary.totalPrice" class="flex gap-0.5 items-center text-current">
                                <template x-if="$store.utils.formatCurrency(summary.totalPrice).symbolBefore">
                                    <span class="font-semibold text-xl"
                                        x-text="$store.utils.formatCurrency(summary.totalPrice).symbol"></span>
                                </template>
                                <span class="font-semibold"
                                    x-text="$store.utils.formatCurrency(summary.totalPrice).number"></span>
                                <template x-if="!$store.utils.formatCurrency(summary.totalPrice).symbolBefore">
                                    <span class="font-semibold"
                                        x-text="$store.utils.formatCurrency(summary.totalPrice).symbol"></span>
                                </template>
                            </div>
                        </div>
                    </div>

                    <ul class="ml-4 text-sm">
                        <template x-for="selectedProduct in summary.products" :key="selectedProduct.id">
                            <li class="flex gap-2 items-start text-current">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-chevron-right-icon lucide-chevron-right shrink-0">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                                <span x-text="selectedProduct.plugin_text"></span>
                            </li>
                        </template>
                    </ul>
                </div>

                <!-- Location -->
                <div x-data="{ show: false }" x-show="show" x-bind="transitionSlideInFromLeft"
                    x-effect="if (currentStep === 4) setTimeout(() => show = true, 200); else show = false"
                    @click="goToStep(2)"
                    class="flex flex-col gap-3 hover:bg-tertiary-600/70 transition-all duration-300 cursor-pointer p-2 px-4 rounded-lg">
                    <div class="flex gap-x-0.5 items-center">
                        <div class="w-8 h-8 flex items-center justify-center text-current">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin w-5 h-5">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>

                        <h4 class="font-semibold text-current text-sm" x-text="getStepByKey('location').labels.menu">
                        </h4>
                    </div>

                    <ul class="ml-4 text-sm">
                        <template x-for="location in summary.locations" :key="location.id">
                            <li class="flex gap-2 items-start text-current">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-chevron-right-icon lucide-chevron-right shrink-0">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                                <span
                                    x-text="\`\${location.street || ''}, \${location.city || ''} \${location.postcode || ''}\`"></span>
                            </li>
                        </template>
                    </ul>
                </div>

                <!-- Employee -->
                <div @click="goToStepByKey('employee')"
                    class="flex items-center gap-3 hover:bg-tertiary-600/70 transition-all duration-300 cursor-pointer p-2 px-4 rounded-lg"
                    x-data="{ show: false }" x-show="show" x-bind="transitionSlideInFromLeft" x-effect="
              if ((getCurrentKey() === 'employee' || getCurrentKey() === 'schedule') && summary.employee?.fullname) {
                setTimeout(() => show = true, 200);
              } else {
                show = false;
              }
            ">
                    <div class="w-8 h-8 flex items-center justify-center text-current">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-shield-user-icon lucide-shield-user w-5 h-5">
                            <path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
                            <circle cx="12" cy="11" r="4" />
                        </svg>
                    </div>
                    <div>
                        <h4 class="font-semibold text-current text-sm">
                            <span
                                x-text="summary.employee ? summary.employee[getStepByKey('employee')?.nameFormat] : ''"></span>
                        </h4>
                    </div>
                </div>

                <!-- Location 2 -->
                <div @click="goToStepByKey('location')"
                    class="flex items-center gap-3 hover:bg-tertiary-600/70 transition-all duration-300 cursor-pointer p-2 px-4 rounded-lg"
                    x-data="{ show: false }" x-show="show" x-bind="transitionSlideInFromLeft" x-effect="
                  if (currentKey === 'submit' && (schedules.selectedInterval)) {
                    setTimeout(() => show = true, 200);
                  } else {
                    show = false;
                  }
                ">
                    <div class="w-8 h-8 flex items-center justify-center text-current">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-map-pin w-6 h-6" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <path
                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <h4 class="font-semibold text-current text-sm">
                            <span x-text="
                              summary.employee?.location
                                ? \`\${summary.employee.location.street}, \${summary.employee.location.name} \${summary.employee.location.postcode}\`
                                : (schedules.selectedInterval?.location
                                    ? \`\${schedules.selectedInterval.location.street}, \${schedules.selectedInterval.location.name} \${schedules.selectedInterval.location.postcode}\`
                                    : 'No location selected')
                            "></span>
                        </h4>
                    </div>
                </div>


                <!-- Date & Time -->
                <div @click="goToStepByKey('schedule')"
                    class="flex items-center gap-3 hover:bg-tertiary-600/70 transition-all duration-300 cursor-pointer p-2 px-4 rounded-lg mb-12"
                    x-data="{ show: false }" x-show="show" x-bind="transitionSlideInFromLeft"
                    x-effect="if (getCurrentKey() === 'schedule') setTimeout(() => show = true, 200); else show = false">
                    <div class="w-8 h-8 flex items-center justify-center text-current">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-calendar-clock-icon lucide-calendar-clock w-5 h-5">
                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                            <path d="M16 2v4" />
                            <path d="M8 2v4" />
                            <path d="M3 10h5" />
                            <path d="M17.5 17.5 16 16.3V14" />
                            <circle cx="16" cy="16" r="6" />
                        </svg>
                    </div>
                    <div>
                        <h4 class="font-semibold text-current text-sm flex flex-col">
                            <span
                                x-text="summary.date
    ? $store.i18n.t('onAt', {
        date: $store.utils.formatReadableDate(summary.date),
        time: $store.utils.extractHourMinute(summary.slot?.start)
      })
    : $store.i18n.t('dateTimeNotSelected')">
                            </span>
                        </h4>
                    </div>

                </div>
                <p class="absolute bottom-10 left-0 text-center w-full text-body-100 opacity-30 font-medium text-sm uppercase"
                    x-html="modal.menuLabels?.footer || ''"></p>
            </div>
        </div>

        <!-- STEPPER ENDS HERE -->

        <!-- STEPS -->

        <div x-show="currentKey !== 'thankyou'"
            class="h-dvh md:h-[80dvh] lg:h-[640px] xl:h-[620px] 2xl:h-[720px] bg-zinc-50 flex flex-col min-h-0">
            <div x-show="currentStep !== 6" class="bg-secondary-500 text-body-200 border-b border-gray-200">
                <span
                    :class="['h-2 bg-primary-500 block @3xl:hidden transition-all', currentStep === 1 && 'w-1/5' || currentStep === 2 && 'w-2/5' || currentStep === 3 && 'w-3/5' || currentStep === 4 && 'w-4/5' || currentStep === 5 && 'w-full' ]">
                </span>


                <div class="flex items-center px-4 py-4">
                    <button
                        class="w-9 h-9 ml-1 flex items-center justify-center rounded-full gap-2 transition-all duration-200 ease-in-out border border-body-200 hover:bg-primary-400 cursor-pointer hover:text-body-100 hover:border-transparent active:scale-95 text-body-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        :disabled="!canGoBack()"
                        @click="if (currentKey === 'submit' && schedules?.quickSelected) {goToStepByKey('employee');} else {prevStep();}"
                        x-tooltip="'Go Back'"
                        data-test-back-button="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-arrow-left-icon lucide-arrow-left w-4 h-4">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg>
                    </button>

                    <h1 class="text-lg font-bold text-current ml-4" x-text="getStepByKey(currentKey).title">
                    </h1>

                    <button x-show="modal.type !== 'INPAGE'"
                        class="md:hidden w-9 h-9 ml-auto mr-1 flex items-center justify-center rounded-full transition-all duration-200 ease-in-out border border-body-200 hover:bg-primary-400 hover:text-body-100 hover:border-transparent cursor-pointer active:scale-95"
                        @click="modal.close()" x-tooltip="'Close'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-x-icon lucide-x w-4 h-4">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div x-show="getError()"
                class="m-6 flex flex-col items-center justify-center text-center text-red-600 p-6 bg-red-50 rounded-lg border border-red-200">
                <div class="text-4xl mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-shield-alert-icon lucide-shield-alert w-10 h-10 text-red-500">
                        <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                    </svg>
                </div>
                <h2 class="text-xl font-semibold" x-text="getError()"></h2>
                <p class="text-sm text-red-500 mt-1">
                    Please try again sometime later.
                </p>
            </div>

            <!-- FILTERS -->
            <div x-show="!getError()" class="p-4 px-6 @lg:px-8 pb-0">
                <!-- PRODUCT FILTER -->


                <template x-if="products.loading || locations.loading">
                    <div class="flex gap-3">
                        <template x-for="i in 4" :key="i">
                            <div class="h-8 w-24 rounded-full bg-gray-300 animate-pulse flex-shrink-0"
                                style="scroll-snap-align: start">
                            </div>
                        </template>
                    </div>
                </template>

                <div x-show="currentKey === 'service'">
                    <div class="overflow-x-auto z-50" x-show="!products.loading && products.availableCategory.length > 0">
                        <div class="flex gap-3 sm:gap-4 items-center py-2 px-2 @sm:px-0 w-max @sm:w-full"
                            style="scroll-snap-type: x mandatory">
                            <!-- All Categories Button -->
                            <div class="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer shadow-sm active:scale-95 transition-all duration-200 bg-primary-500 flex-shrink-0 border border-transparent hover:border-primary-500"
                                :class="products.activeCategory === 'all' ? 'bg-primary-500 text-body-100' : 'bg-white text-gray-700'"
                                @click="products.setActiveCategory('all');" style="scroll-snap-align: start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-hand-heart-icon lucide-hand-heart">
                                    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                                    <path
                                        d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                    <path d="m2 15 6 6" />
                                    <path
                                        d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                                </svg>
                                <span class="text-sm font-medium whitespace-nowrap">All</span>
                            </div>

                            <!-- Category Buttons -->
                            <template x-for="(category, index) in products.availableCategory" :key="index">
                                <div class="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer shadow-sm active:scale-95 transition-all duration-200 flex-shrink-0 border border-transparent hover:border-primary-500"
                                    :class="products.activeCategory?.id === category.id  ? 'bg-primary-500 text-body-100' : 'bg-white text-gray-700'"
                                    @click="products.setActiveCategory(null); setTimeout(() => {products.setActiveCategory(category)}, 1)"
                                    style="scroll-snap-align: start">
                                    <img :src="category.icon" :alt="\`\${category.name} icon\`" class="w-5 h-5"
                                        :style="{ filter: products.activeCategory?.id === category.id ? 'var(--image-filter)' : '' }" />
                                    <span x-text="category.name" class="text-sm font-medium whitespace-nowrap"></span>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>

                <!-- LOCATION FILTERS -->

                <div x-show="currentKey === 'location' && !locations.loading && locations.availableRegion.length > 0">
                    <div class="w-full overflow-x-auto">
                        <div class="flex gap-3 sm:gap-4 items-center py-2 px-2 @sm:px-0 w-max @sm:w-full"
                            style="scroll-snap-type: x mandatory">
                            <!-- All Countries Button -->
                            <div class="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer shadow-sm active:scale-95 transition-colors duration-200 flex-shrink-0 border border-transparent hover:border-primary-500"
                                :class="locations.selectedRegion === 'all' ? 'bg-primary-500 text-body-100' : 'bg-white text-gray-700'"
                                @click="locations.selectedRegion = 'all'; setTimeout(() => {locations.selectedRegion = 'all'}, 0)"
                                style="scroll-snap-align: start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-earth-icon lucide-earth text-lg">
                                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                                    <path
                                        d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                                    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                                <span class="text-sm font-medium whitespace-nowrap">All</span>
                            </div>

                            <template x-for="(region, index) in locations.availableRegion" :key="index">
                                <div class="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer shadow-sm active:scale-95 transition-colors duration-200 flex-shrink-0 border border-transparent hover:border-primary-500"
                                    :class="locations.selectedRegion === region.name ? 'bg-primary-500 text-body-100' : 'bg-white text-gray-700'"
                                    @click="locations.selectedRegion = null; setTimeout(() => {locations.selectedRegion = region.name}, 0)"
                                    style="scroll-snap-align: start">
                                    <img x-show="region.icon" :src="region.icon" :alt="\`\${region.name} flag\`"
                                        class="h-6 w-6"
                                        :style="{filter: locations.selectedRegion === region.name ? 'var(--image-filter)' : ''}" />

                                    <span x-text="region.name" class="text-sm font-medium whitespace-nowrap"></span>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <div x-show="!getError()" id="scrollContainer"
                class="bg-zinc-50 flex-1 min-h-0 overflow-y-auto w-full relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50"
                :class="currentStep === 6 ? 'pb-8 mb-0' : 'pt-0 p-4 px-6 pb-8 @lg:px-8'">
                <!-- STEP 1 STARTS -->
                <div
                  x-show="currentKey === 'service'"
                  x-bind="transitionSlideInFromRight"
                  class="w-full relative bw-step bw-step-service"
                  data-bw-section="step-service"
                  data-test-step="service"
                >
                    <template x-if="products.loading">
                        <div class="mt-4">
                            <template x-for="i in 5" :key="i">
                                <div
                                    class="flex justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-sm mb-3 animate-pulse">
                                    <div class="flex gap-4 w-full">
                                        <div class="w-5 h-5 rounded-full bg-gray-300 mt-1"></div>
                                        <div class="flex flex-col gap-2 w-full">
                                            <div class="h-4 bg-gray-300 rounded w-1/3"></div>
                                            <div class="h-3 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2 w-16">
                                        <div class="h-4 bg-gray-300 rounded w-full"></div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </template>

                    <div
                        x-show="!products.loading"
                        class="space-y-4 mt-4 bw-service-list"
                        data-bw-block="service-list"
                        data-test-service-list="true"
                    >
                        <div
                            x-show="products.activeCategory === 'all' && products.availableCategory.length"
                            x-bind="transitionSlideInFromBottom"
                            class="bw-service-groups"
                            data-bw-block="service-groups"
                        >
                            <template x-for="category in products.availableCategory" :key="category.id">
                                <div
                                    class="space-y-2 bw-service-group"
                                    :data-bw-block="\`service-group-\${category.id}\`"
                                >
                                    <div class="flex items-center gap-2">
                                        <img :src="category.icon" :alt="\`\${category.name} icon\`" class="w-5 h-5" />
                                        <h3 class="text-lg font-semibold text-gray-800" x-text="category.name"></h3>
                                    </div>

                                    <template
                                        x-for="(product, index) in products.available.filter(p => p.product_group?.id === category.id)"
                                        :key="product.id">
                                        <label
                                            class="flex justify-between items-center gap-4 p-4 bg-white rounded-lg border shadow-sm hover:border-primary-500 cursor-pointer mb-3 transition"
                                            :class="products.selected.includes(product.id) ? 'border-primary-500' : 'hover:border-primary-500 border-transparent'"
                                            :for="product.id"
                                            :data-test-service-item="product.id">
                                            <div class="flex gap-4">
                                                <input type="checkbox" name="product" :id="product.id"
                                                    class="mt-1 rounded text-primary-500 ring-primary-500 duration-500"
                                                    :value="product.id"
                                                    :checked="products.selected.includes(product.id)"
                                                    @change="products.toggleProduct(product.id)"
                                                    :class="products.selected.includes(product.id) ? 'scale-120 opacity-100' : 'scale-100 opacity-70'" />
                                                <div class="flex flex-col text-sm text-gray-700">
                                                    <span class="font-semibold"
                                                        x-text="\`\${product.plugin_text}\`"></span>
                                                    <span class="text-gray-500" x-text="product.description"></span>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-end justify-center gap-1 text-gray-700 text-sm md:text-base">
                                                <div class="flex items-center gap-1 text-gray-600" x-show="product.duration">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         class="w-4 h-4 md:w-5 md:h-5 text-primary-500"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                      <line x1="10" x2="14" y1="2" y2="2" />
                                                      <line x1="12" x2="15" y1="14" y2="11" />
                                                      <circle cx="12" cy="14" r="8" />
                                                    </svg>
                                                    <span class="font-medium mt-0.5" x-text="$store.utils.formatDuration(product.duration)"></span>
                                                </div>

                                                <template x-if="getStepByKey('service')?.showPrice && +product.price">
                                                    <div class="flex items-center gap-1 text-gray-700" x-data="$store.utils.formatCurrency(product.price)">
                                                        <template x-if="symbolBefore">
                                                            <span class="w-5 h-5 flex items-center justify-center text-2xl font-medium text-primary-500" x-text="symbol"></span>
                                                        </template>
                                                        <span class="text-sm md:text-base text-gray-700" x-text="number"></span>
                                                        <template x-if="!symbolBefore">
                                                            <span class="w-5 h-5 flex items-center justify-center text-lg font-medium text-primary-500" x-text="symbol"></span>
                                                        </template>
                                                    </div>
                                                </template>
                                            </div>
                                        </label>
                                    </template>
                                </div>
                            </template>
                        </div>


                        <template x-if="products.activeCategory !== 'all' || products.availableCategory.length === 0">
                            <template x-for="(product, index) in products.available" :key="product.id">
                                <label
                                    x-show="products.availableCategory.length === 0 || product.product_group?.id === products.activeCategory?.id"
                                    class="flex justify-between items-center gap-4 p-4 bg-white rounded-lg border shadow-sm hover:border-primary-500 cursor-pointer mb-3 transition"
                                    :class="products.selected.includes(product.id) ? 'border-primary-500' : 'hover:border-primary-500 border-transparent'"
                                    x-bind="transitionSlideInFromBottom" :style="\`transition-delay: \${index * 20}ms\`"
                                    :for="product.id"
                                    :data-test-service-item="product.id">
                                    <div class="flex gap-4">
                                        <input type="checkbox" name="product" :id="product.id"
                                            class="mt-1 rounded text-primary-500 ring-primary-500 duration-500"
                                            :value="product.id" :checked="products.selected.includes(product.id)"
                                            @change="products.toggleProduct(product.id)"
                                            :class="products.selected.includes(product.id) ? 'scale-120 opacity-100' : 'scale-100 opacity-70'" />
                                        <div class="flex flex-col text-sm text-gray-700">
                                            <span class="font-semibold" x-text="\`\${product.plugin_text}\`"></span>
                                            <span class="text-gray-500" x-text="product.description"></span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-end justify-center gap-1 text-gray-700 text-sm md:text-base">
                                        <div class="flex items-center gap-1 text-gray-600" x-show="product.duration">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 class="w-4 h-4 md:w-5 md:h-5 text-primary-500"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                              <line x1="10" x2="14" y1="2" y2="2" />
                                              <line x1="12" x2="15" y1="14" y2="11" />
                                              <circle cx="12" cy="14" r="8" />
                                            </svg>
                                            <span class="font-medium mt-0.5" x-text="$store.utils.formatDuration(product.duration)"></span>
                                        </div>

                                        <template x-if="getStepByKey('service')?.showPrice && +product.price">
                                            <div class="flex items-center gap-1 text-gray-700" x-data="$store.utils.formatCurrency(product.price)">
                                                <template x-if="symbolBefore">
                                                    <span class="w-5 h-5 flex items-center justify-center text-2xl font-medium text-primary-500" x-text="symbol"></span>
                                                </template>
                                                <span class="text-sm md:text-base text-gray-700" x-text="number"></span>
                                                <template x-if="!symbolBefore">
                                                    <span class="w-5 h-5 flex items-center justify-center text-lg font-medium text-primary-500" x-text="symbol"></span>
                                                </template>
                                            </div>
                                        </template>
                                    </div>
                                </label>
                            </template>
                        </template>
                    </div>

                    <template
                      x-if="!products.loading && (!Array.isArray(products.available) || products.available.length === 0)"
                    >
                      <div
                        class="mt-4 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3"
                        data-test-service-empty="true"
                      >
                        No services available.
                      </div>
                    </template>
                </div>
                <!-- STEP 1 ENDS -->

                <!-- STEP 2 STARTS -->
                <div
                  x-show="currentKey === 'location'"
                  x-bind="transitionSlideInFromRight"
                  class="w-full bw-step bw-step-location"
                  data-bw-section="step-location"
                  data-test-step="location"
                >
                    <template x-if="locations.loading">
                        <div class="mt-4">
                            <template x-for="i in 5" :key="i">
                                <div
                                    class="flex justify-between items-center gap-4 p-4 bg-white rounded-lg shadow-sm mb-3 animate-pulse">
                                    <div class="flex gap-4 w-full">
                                        <div class="w-5 h-5 rounded-full bg-gray-300 mt-1"></div>
                                        <div class="flex flex-col gap-2 w-full">
                                            <div class="h-4 bg-gray-300 rounded w-1/3"></div>
                                            <div class="h-3 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </template>

                    <div
                        x-show="!locations.loading"
                        class="mt-4 bw-location-list"
                        data-bw-block="location-list"
                        data-test-location-list="true"
                    >
                        <template x-for="(location, index) in locations.available" :key="location.id">
                            <div
                                x-show="locations.selectedRegion === 'all' || locations.selectedRegion === location.region?.name"
                                x-bind="transitionSlideInFromBottom"
                                class="mb-3 bw-location-card"
                                :data-bw-block="\`location-\${location.id}\`"
                                :data-test-location-item="location.id"
                                :style="\`transition-delay: \${index * 20}ms\`"
                            >
                                <label
                                    class="flex justify-between items-center gap-4 p-4 bg-white rounded-lg border shadow-sm hover:border-primary-500 cursor-pointer transition"
                                    :class="locations.selected.includes(location.id) ? 'border-primary-500' : 'hover:border-primary-500 border-transparent'">
                                    <div class="flex gap-4">
                                        <input type="checkbox" :id="location.id" name="selectedLocations"
                                            class="mt-1 rounded text-primary-500 ring-primary-500 duration-500"
                                            :value="location.id" :checked="locations.selected.includes(location.id)"
                                            @change="locations.toggleLocation(location.id);if (employees.selected !== true) employees.setEmployee(null);schedules.setDate(null);schedules.setSelectedInterval(null);"
                                            :class="locations.selected.includes(location.id) ? 'scale-120 opacity-100' : 'scale-100 opacity-70'" />
                                        <div class="flex flex-col text-sm text-gray-700">
                                            <span class="font-semibold" x-text="location.name"></span>
                                            <span class="text-gray-500"
                                                x-text="\`\${location.street || ''}, \${location.city || ''} \${location.postcode || ''}\`"></span>

                                            <!-- Employee thumbnails (toggle by steps.location.showEmployee) -->
                                            <template x-if="getStepByKey('location')?.showEmployee && Array.isArray(location.employees) && location.employees.length">
                                              <div class="mt-3 flex flex-wrap items-start gap-2">
                                                <template x-for="(emp, i) in location.employees.slice(0, 5)" :key="\`emp-\${emp.user.id}\`">
                                                  <div class="w-20 flex flex-col rounded-md border border-gray-200 bg-white shadow-sm min-w-0">
                                                    <div
                                                      class="w-full bg-gray-100 rounded-t-md overflow-hidden"
                                                      :style="{
                                                        aspectRatio: '3 / 4',
                                                        backgroundImage: \`url('\${emp.user?.image?.url || 'https://cdn-icons-png.flaticon.com/512/847/847969.png'}')\`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat'
                                                      }">
                                                    </div>
                                                    <div class="px-2 py-1 text-center w-full">
                                                      <span
                                                        class="block text-xs font-medium text-gray-700 whitespace-nowrap overflow-hidden"
                                                        style="text-overflow: ellipsis;"
                                                        :title="emp.user?.fullname || emp.user?.firstname || ''"
                                                        x-text="emp.user?.firstname || (emp.user?.fullname || '').split(' ')[0] || '—'">
                                                      </span>
                                                    </div>
                                                  </div>
                                                </template>

                                                <template x-if="location.employees.length > 5">
                                                  <div class="w-20 flex flex-col rounded-md border border-gray-200 bg-white shadow-sm">
                                                    <div
                                                      class="w-full flex items-center justify-center bg-gray-50 text-gray-700 font-semibold rounded-t-md overflow-hidden"
                                                      :style="{ aspectRatio: '3 / 4' }">
                                                      +<span x-text="location.employees.length - 5"></span>
                                                    </div>
                                                    <div class="px-2 py-1 text-center w-full">
                                                      <span class="block text-xs font-medium text-gray-700">more</span>
                                                    </div>
                                                  </div>
                                                </template>
                                              </div>
                                            </template>
                                            <!-- /Employee thumbnails -->
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </template>
                    </div>

                    <template
                      x-if="!locations.loading && (!Array.isArray(locations.available) || locations.available.length === 0)"
                    >
                      <div
                        class="mt-4 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3"
                        data-test-location-empty="true"
                      >
                        No locations available.
                      </div>
                    </template>
                </div>

                <!-- STEP 2 ENDS -->

                <!-- STEP 3 -->
                <div
                  x-show="currentKey === 'employee'"
                  x-bind="transitionSlideInFromRight"
                  class="w-full relative pb-8 bw-step bw-step-employee"
                  data-bw-section="step-employee"
                  data-test-step="employee"
                >
                    <div class="my-4 space-y-6 w-full" x-show="employees.loading">
                        <template x-for="(_, index) in Array.from({ length: 3 })" :key="index">
                            <div class="flex items-center justify-center gap-4 animate-pulse">
                                <div class="w-16 h-16 rounded-full bg-gray-300"></div>
                                <div class="flex-1 space-y-2 py-2">
                                    <div class="h-5 bg-gray-300 rounded"></div>
                                    <div class="h-3 bg-gray-300 rounded w-1/4"></div>
                                </div>
                            </div>
                        </template>
                    </div>

                    <div
                        class="mt-6 space-y-4 bw-employee-list"
                        x-show="!employees.loading"
                        data-bw-block="employee-list"
                        data-test-employee-list="true"
                    >
                        <template x-if="employees.grouped">
                            <template x-for="([groupName, groupObj]) in Object.entries(employees.grouped)"
                                :key="groupName">
                                <div
                                    class="mb-6 bw-employee-group"
                                    x-show="groupObj.employees.length > 0"
                                    :data-bw-block="\`employee-group-\${groupObj.location?.id ?? groupName}\`"
                                    :data-test-employee-group="groupObj.location?.id ?? groupName"
                                >
                                    <div class="text-sm text-gray-800 font-semibold mb-2 flex items-center gap-2"
                                        x-bind="transitionSlideInFromBottom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-map-pin-icon lucide-map-pin">
                                            <path
                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <h3
                                          class="text-lg font-semibold text-gray-800"
                                          x-text="groupObj.location
                                            ? \`\${groupObj.location.street || ''}, \${groupObj.location.name || ''} \${groupObj.location.postcode || ''}\`
                                            : groupName"
                                        >
                                        </h3>
                                    </div>

                                    <template x-for="(employee, index) in groupObj.employees" :key="employee.user.id">
                                        <div
                                            class="border-2 not-last:mb-3 p-4 flex flex-col rounded-xl shadow-sm transition-colors duration-500 gap-4 w-full cursor-pointer relative group bw-employee-card"
                                            :data-bw-block="\`employee-\${employee.user.id}\`"
                                            :data-test-employee-card="employee.user.id"
                                            :class="employees.selected === String(employee.user.id) ? 'border-primary-500 bg-primary-50' : 'bg-white border-transparent hover:border-primary-500'"
                                            @click="employees.allowAllEnabled = false;employees.setEmployee(employee.user.id); schedules?.setDate(null); schedules?.setSelectedInterval(null); schedules.quickSelected = false; $nextTick(() => {$el.scrollIntoView({ behavior: 'smooth', block: 'center' });});">
                                            <div
                                                x-show="employees.selected === String(employee.user.id)"
                                                class="absolute top-4 right-4 z-10 flex items-center gap-2"
                                              >
                                                <button
                                                  @click.stop="
                                                    employees.setEmployee(null);
                                                    schedules.setDate(null);
                                                    schedules.setSelectedInterval(null);
                                                    schedules.quickSelected = false;
                                                  "
                                                  class="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary-500 hover:border-primary-500 shadow-sm active:scale-95 transition"
                                                  aria-label="Clear selected employee"
                                                  x-tooltip="'Clear selection'"
                                                >
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                       class="lucide lucide-x">
                                                    <path d="M18 6 6 18" />
                                                    <path d="M6 6l12 12" />
                                                  </svg>
                                                </button>

                                                <div class="stroke-primary-500 rounded-full border-0 animate-pop">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                      fill="none" stroke-width="2" stroke-linecap="round"
                                                      stroke-linejoin="round" class="lucide lucide-circle-check">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="m9 12 2 2 4-4" />
                                                  </svg>
                                                </div>
                                              </div>

                                            <div class="flex items-center justify-center gap-4">
                                                <div x-data="{profileLoaded: false,previousImage: '',init() {this.previousImage = employee.user?.image?.url || '';this.profileLoaded = false;},updated() {const newImage = employee.user?.image?.url || '';if (newImage !== this.previousImage) {this.profileLoaded = false;this.previousImage = newImage;}}}"
                                                    x-init="init()" x-effect="updated()" class="relative w-16 h-16">
                                                    <div x-show="!profileLoaded"
                                                        class="absolute inset-0 rounded-full bg-gray-300 animate-pulse">
                                                    </div>

                                                    <img :src="employee.user?.image?.url || 'https://cdn-icons-png.flaticon.com/512/847/847969.png'"
                                                        alt="Employee photo"
                                                        class="w-16 h-16 rounded-full object-cover border-4 border-white transition-all duration-500 group-hover:scale-110 group-hover:border-primary-200"
                                                        @load="profileLoaded = true"
                                                        @error="$event.target.src = 'https://cdn-icons-png.flaticon.com/512/847/847969.png'; profileLoaded = true"
                                                        :class="{ 'opacity-0': !profileLoaded, 'opacity-100': profileLoaded }" />
                                                </div>


                                                <div class="flex-1 py-2">
                                                    <h3 class="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors duration-300"
                                                        x-text="employee.user[getStepByKey('employee')?.nameFormat] || 'Employee Name'">
                                                    </h3>
                                                    <span class="font-medium text-sm text-green-600">Available</span>
                                                </div>
                                            </div>

                                            <!-- Available Slots -->
                                            <div x-show="employees.selected === String(employee.user.id)"
                                                x-transition:enter="transition ease-out duration-300"
                                                x-transition:enter-start="opacity-0 scale-95 -translate-y-2"
                                                x-transition:enter-end="opacity-100 scale-100 translate-y-0"
                                                class="space-y-2">

                                                <h4 class="text-sm font-semibold text-gray-700 uppercase">
                                                    Available
                                                    Slots</h4>

                                                <div class="grid grid-cols-1 @lg:grid-cols-2 @xl:grid-cols-3 gap-3">
                                                    <template x-if="schedules.loading">
                                                        <template x-for="i in 3" :key="i">
                                                            <div
                                                                class="animate-pulse bg-gray-100 rounded-lg border-2 border-gray-200 px-4 py-3 h-[72px] flex flex-col justify-center items-center gap-1">
                                                                <div class="w-24 h-4 bg-gray-300 rounded">
                                                                </div>
                                                                <div class="w-20 h-3 bg-gray-300 rounded">
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </template>

                                                    <template
                                                        x-if="!schedules.loading && schedules.grouped && schedules.getQuickSlots(employee.user.location.id).length > 0">
                                                        <template
                                                            x-for="(slot, slotIndex) in schedules.getQuickSlots(employee.user.location.id)"
                                                            :key="\`\${employee.user.location.id}-\${slotIndex}\`">
                                                            <button
                                                                @click="schedules.setSelectedInterval(slot); schedules.setDate(slot.start_date); schedules.setSelected(slot); schedules.quickSelected = true; $event.stopPropagation()"
                                                                :style="\`animation-delay: \${slotIndex * 0.1}s\`"
                                                                class="cursor-pointer relative px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ease-in-out transform focus:outline-none active:scale-95 hover:border-primary-500 border-gray-200 group/slot hover:text-primary-500 bg-white text-gray-700"
                                                                :class="schedules.selectedInterval?.start === slot.start && schedules.selectedInterval?.location?.id === slot.location?.id ? 'border-primary-500 text-primary-500' : ''">
                                                                <div
                                                                    class="relative z-10 flex flex-col items-center gap-1">
                                                                    <span class="font-bold"
                                                                        x-text="slot.start_date"></span>
                                                                    <span class="text-xs font-bold"
                                                                        x-text="$store.utils.extractHourMinute(slot.start)">
                                                                    </span>
                                                                </div>

                                                                <div x-show="schedules.selectedInterval?.start === slot.start && schedules.selectedInterval?.location?.id === slot.location?.id"
                                                                    class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                                                    <div class="w-2 h-2 bg-primary-500 rounded-full">
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </template>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </template>

                                </div>
                            </template>
                        </template>

                        <template
                          x-if="!employees.loading && (!employees.grouped || Object.values(employees.grouped).every(g => !g.employees || g.employees.length === 0))"
                        >
                          <div
                            class="mt-4 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3"
                            data-test-employee-empty="true"
                          >
                            No employees available.
                          </div>
                        </template>
                    </div>
                </div>
                <!-- STEP 3 ENDS -->

                <!-- STEP 4 -->
                <div
                  x-show="currentKey === 'schedule'"
                  x-bind="transitionSlideInFromRight"
                  class="w-full bw-step bw-step-schedule"
                  data-bw-section="step-schedule"
                  data-test-step="schedule"
                >
                    <!-- Calender -->

                    <div x-show="schedules.loading"
                        class="grid grid-cols-1 gap-4 justify-between items-start"
                        :class="modal.type === 'MODAL' ? '@3xl:grid-cols-1 @5xl:grid-cols-3' : '@5xl:grid-cols-3'">
                        <div class="p-6 bg-white rounded-xl shadow animate-pulse space-y-3"
                             :class="locations.selected.length > 1 ? '@5xl:col-span-3' : '@5xl:col-span-2'">
                            <div class="flex justify-between">
                                <div class="h-10 w-1/3 bg-gray-200 rounded"></div>
                                <div class="flex gap-2">
                                    <div class="h-10 w-10 bg-gray-200 rounded"></div>
                                    <div class="h-10 w-10 bg-gray-200 rounded"></div>
                                </div>
                            </div>

                            <div class="grid grid-cols-7 gap-1">
                                <template x-for="i in 7" :key="'sk-head-' + i">
                                    <div class="h-10 bg-gray-200 rounded"></div>
                                </template>
                            </div>

                            <div class="grid grid-cols-7 gap-1">
                                <template x-for="i in 35" :key="'sk-day-' + i">
                                    <div class="min-h-10 max-h-12 m-1 rounded-lg bg-gray-200"></div>
                                </template>
                            </div>
                        </div>
                    </div>


                    <div
                        x-show="!schedules.loading"
                        x-data="datePicker"
                        x-init="init()"
                        x-effect="setMonth(schedules.newDate)"
                        class="grid grid-cols-1 gap-4 justify-between items-start bw-schedule-grid"
                        data-bw-block="schedule-grid"
                        :class="modal.type === 'MODAL' ? '@3xl:grid-cols-1 @5xl:grid-cols-3' : '@5xl:grid-cols-3'"
                    >
                        <div
                            class="w-full p-6 bg-white rounded-xl shadow bw-schedule-calendar"
                            data-bw-block="schedule-calendar"
                            data-test-schedule-calendar="true"
                            :class="locations.selected.length > 1 ? '@5xl:col-span-3' : '@5xl:col-span-2'"
                        >
                            <div class="flex justify-between items-center mb-4 space-x-2">
                                <div>
                                    <span class="text-xl font-bold text-gray-800 uppercase" x-text="getMonth()"></span>
                                    <span class="ml-1 text-xl font-normal text-gray-600" x-text="year"></span>
                                </div>

                                <div class="flex gap-2">
                                    <button
                                        x-bind:disabled="(year < new Date().getFullYear()) || (year === new Date().getFullYear() && month <= new Date().getMonth())"
                                        @click="prevMonth(); schedules?.setDate(null); schedules.expand(month); refreshScheduleForVisibleMonth(year, month);"
                                        class="border text-gray-600 px-2 py-2 rounded flex items-center justify-center border-gray-200 cursor-pointer transition-transform hover:scale-105 active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-chevron-left-icon lucide-chevron-left">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button
                                        @click="nextMonth(); schedules?.setDate(null); schedules.expand(month); refreshScheduleForVisibleMonth(year, month);"
                                        class="border text-gray-600 px-2 py-2 rounded flex items-center justify-center border-gray-200 cursor-pointer transition-transform hover:scale-105 active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-chevron-right-icon lucide-chevron-right">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="grid grid-cols-7 text-center text-sm font-semibold text-gray-600 mb-1">
                                <template x-for="day in daysShort" :key="day">
                                    <div x-text="day" class="py-1"></div>
                                </template>
                            </div>

                            <!-- Calendar Grid -->
                            <div class="grid grid-cols-7 text-sm">
                                <template x-for="n in blankDays" :key="'b'+n">
                                    <div
                                        class="relative flex items-center justify-center min-h-10 max-h-12 m-1 rounded-lg bg-gray-100">
                                    </div>
                                </template>

                                <!-- Actual Days -->
                                <template x-for="day in daysInMonth" :key="'d'+day">
                                    <div class="relative flex items-center justify-center min-h-10 max-h-12 m-1 rounded-lg"
                                        :class="{
                            'bg-primary-600': schedules.isDateSelected(getDate(day)),
                            'border border-primary-400/10 text-primary-500 cursor-not-allowed bg-primary-400/10': !schedules.isAvailable(getDate(day)),
                            'hover:bg-primary-600 bg-primary-400 cursor-pointer font-semibold text-body-100': schedules.isAvailable(getDate(day)),
                            }" :data-test-schedule-day="getDate(day)" @click="
                            if (!schedules.isAvailable(getDate(day))) return;
                            schedules.setDate(null);
                            setTimeout(() => {
                              schedules.setDate(getDate(day));
                              schedules.setSelected(null);
                            }, 100);
                            $nextTick(() => {
                              setTimeout(() => {
                                const root = $el.getRootNode();
                                const container = root.querySelector('#scrollContainer');
                                if (!container) return;

                                const target1 = root.querySelector('#timeSlot1');
                                const target2 = root.querySelector('#timeSlot2');

                                // Prefer single-location times if present, otherwise multi-location
                                const target = target1 || target2;
                                if (!target) return;

                                const offset = 8; // small padding from the top inside the container
                                const top = Math.max(target.offsetTop - container.offsetTop - offset, 0);

                                container.scrollTo({
                                  top,
                                  behavior: 'smooth',
                                });
                              }, 250);
                            });
                            ">
                                        <span x-text="day"></span>
                                        <span x-show="schedules.isDateSelected(getDate(day))"
                                            class="w-2.5 h-2.5 block bg-primary-500 border-2 border-white rounded-full absolute top-0 right-0 shadow-sm"></span>
                                    </div>
                                </template>
                            </div>
                        </div>

                        <!-- Date Picker Ends -->
                        <!-- Time Slot Picker -->
                        <div :style="{ gridColumn: summary.locations.length > 1 ? '1 / -1' : '' }" class="w-full self-start">





                            <div
                                id="timeSlot1"
                                x-show="summary.locations.length === 1 && schedules.selectedDate"
                                class="self-start @5xl:col-span-1 bw-schedule-times-single"
                                data-bw-block="schedule-times-single"
                                data-test-schedule-times-single="true"
                            >
                                <div class="p-4 bg-white rounded-xl shadow border border-gray-200" style="position: sticky; top: 1rem;">
                                    <template x-if="summary.locations[0]">
                                        <div class="text-center mb-3">
                                            <p class="text-sm font-semibold text-gray-800"
                                               x-text="\`\${summary.locations[0].street || ''}, \${summary.locations[0].name || ''} \${summary.locations[0].postcode || ''}\`">
                                            </p>
                                        </div>
                                    </template>

                                    <template x-if="schedules.getTimeSlotsForSelectedDate(locations.selected).length === 0">
                                        <div
                                            class="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3"
                                            data-test-schedule-empty="true"
                                        >
                                            No times available for this date.
                                        </div>
                                    </template>

                                    <div class="grid gap-3 self-start pb-8" style="grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));">
                                        <template x-for="(slot, index) in schedules.selectedDate ? schedules.getTimeSlotsForSelectedDate(locations.selected) : []" :key="index">
                                            <div x-data="{ show: false }" x-init="setTimeout(() => show = true, Math.min(index * 40, 800))"
                                                 x-show="show" x-transition:enter="transition ease-out duration-200"
                                                 x-transition:enter-start="opacity-0 translate-y-4"
                                                 x-transition:enter-end="opacity-100 translate-y-0">
                                                <button
                                                    @click="schedules.setSelectedInterval(slot); schedules.setSelected(slot); $event.stopPropagation()"
                                                    class="w-full mx-auto cursor-pointer flex items-center justify-center gap-1 relative px-4 py-3 rounded-lg shadow-sm border-2 text-sm font-medium transition-all duration-300 ease-in-out transform focus:outline-none active:scale-95 hover:border-primary-500 bg-white text-gray-600 hover:text-primary-500"
                                                    :class="schedules.selectedInterval?.start === slot.start && schedules.selectedInterval?.location.id === slot.location.id
                                                                        ? 'border-primary-500 text-primary-500'
                                                                        : 'border-transparent'"
                                                    :data-test-schedule-slot="slot.start">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        class="lucide lucide-alarm-clock-icon lucide-alarm-clock">
                                                        <circle cx="12" cy="13" r="8" />
                                                        <path d="M12 9v4l2 2" />
                                                        <path d="M5 3 2 6" />
                                                        <path d="m22 6-3-3" />
                                                        <path d="M6.38 18.7 4 21" />
                                                        <path d="M17.64 18.67 20 21" />
                                                    </svg>
                                                    <span class="mt-0.5 font-bold"
                                                        x-text="$store.utils.extractHourMinute(slot.start)">
                                                    </span>

                                                    <div x-show="schedules.selectedInterval?.start === slot.start && schedules.selectedInterval?.location.id === slot.location.id"
                                                        class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                                        <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                                    </div>
                                                </button>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        x-show="summary.locations.length > 1  && schedules.grouped && Object.keys(schedules.grouped).length && schedules.selectedDate"
                        class="my-4 bw-schedule-times-multi"
                        id="timeSlot2"
                        data-bw-block="schedule-times-multi"
                    >
                        <template x-for="[slotKey, group] in Object.entries(schedules.grouped || {})" :key="slotKey">
                            <div
                                class="mb-6 p-4 bg-white rounded-xl shadow border border-gray-200 bw-schedule-location-group"
                                :data-bw-block="\`schedule-location-\${group.location?.id ?? slotKey}\`"
                                :data-test-schedule-location-group="group.location?.id ?? slotKey"
                            >
                                <div class="flex items-start justify-between mb-3" x-bind="transitionSlideInFromBottom">
                                    <div class="flex flex-1 items-center justify-center gap-2 text-sm text-gray-800 font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin">
                                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <h3 class="text-lg font-semibold text-center"
                                            x-text="\`\${group.location.street}, \${group.location.name} \${group.location.postcode}\`">
                                        </h3>
                                    </div>
                                    <div class="text-right">
                                        <p class="text-xs uppercase text-gray-500 font-semibold">Selected date</p>
                                        <p class="text-sm font-bold text-gray-800" x-text="$store.utils.formatReadableDate(schedules.selectedDate)"></p>
                                    </div>
                                </div>

                                <template x-if="schedules.getTimeSlotsForSelectedDate(slotKey).length === 0">
                                    <div
                                        class="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3"
                                        data-test-schedule-empty="true"
                                    >
                                        No times available for this date.
                                    </div>
                                </template>

                                <div x-show="schedules.selectedDate" x-bind="transitionSlideInFromBottom"
                                    class="grid gap-3"
                                    style="grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); justify-items: stretch;">
                                    <template x-for="(slot, index) in schedules.getTimeSlotsForSelectedDate(slotKey)"
                                        :key="index">
                                        <button @click="schedules.setSelectedInterval(slot);  $event.stopPropagation()"
                                            class="w-full cursor-pointer flex items-center justify-center gap-1 relative px-4 py-3 rounded-lg shadow-sm border-2 text-sm font-medium transition-all duration-300 ease-in-out transform focus:outline-none active:scale-95 hover:border-primary-500 bg-white text-gray-600 hover:text-primary-500"
                                            :class="schedules.selectedInterval?.start === slot.start && schedules.selectedInterval?.location.id === slot.location.id
                                                    ? 'border-primary-500 text-primary-500'
                                                    : 'border-transparent'"
                                            :data-test-schedule-slot="slot.start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-alarm-clock-icon lucide-alarm-clock">
                                                <circle cx="12" cy="13" r="8" />
                                                <path d="M12 9v4l2 2" />
                                                <path d="M5 3 2 6" />
                                                <path d="m22 6-3-3" />
                                                <path d="M6.38 18.7 4 21" />
                                                <path d="M17.64 18.67 20 21" />
                                            </svg>
                                            <span class="mt-0.5 font-bold"
                                                x-text="$store.utils.extractHourMinute(slot.start)">
                                            </span>

                                            <div x-show="schedules.selectedInterval?.start === slot.start && schedules.selectedInterval?.location.id === slot.location.id"
                                                class="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            </div>
                                        </button>
                                    </template>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- STEP 4 END -->

                <!-- STEP 5  -->
                <div x-show="currentKey === 'submit'" x-bind="transitionSlideInFromRight"
                    class="w-full relative space-y-6" data-test-step="submit">
                    <div class="bg-white shadow-sm rounded-lg p-4 space-y-3 @3xl:hidden">
                        <div class="flex items-center gap-2 text-sm font-semibold text-gray-600">
                            <span x-text="steps.at(-1).labels.bookingInfo"></span>
                        </div>

                        <div class="space-y-3 text-sm text-gray-800 pl-1">
                            <!-- Service -->
                            <div class="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-hand-heart-icon lucide-hand-heart w-4 h-4 mt-0.5 text-primary-400 shrink-0">
                                    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                                    <path
                                        d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                    <path d="m2 15 6 6" />
                                    <path
                                        d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                                </svg>
                                <div>
                                    <p class="font-medium" x-text="getStepByKey('service').labels.menu"></p>
                                    <p
                                        x-text="summary.products.map((product) => product.plugin_text).join(', ') || 'No service selected'">
                                    </p>
                                </div>
                            </div>

                            <!-- Date & Time -->
                            <div class="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-calendar-clock-icon lucide-calendar-clock w-4 h-4 mt-0.5 text-primary-400">
                                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                                    <path d="M16 2v4" />
                                    <path d="M8 2v4" />
                                    <path d="M3 10h5" />
                                    <path d="M17.5 17.5 16 16.3V14" />
                                    <circle cx="16" cy="16" r="6" />
                                </svg>
                                <p>
                                    <span
                                        x-text="summary.date
    ? $store.i18n.t('onAt', {
        date: $store.utils.formatReadableDate(summary.date),
        time: $store.utils.extractHourMinute(summary.slot?.start)
      })
    : $store.i18n.t('dateTimeNotSelected')">
                                    </span>
                                </p>
                            </div>

                            <!-- Location -->
                            <div class="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-map-pin-icon lucide-map-pin w-4 h-4 mt-0.5 text-primary-400">
                                    <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <p x-text="schedules.selectedInterval && schedules.selectedInterval?.location
                    ? \`\${schedules.selectedInterval?.location.street}, \${schedules.selectedInterval?.location.name} \${schedules.selectedInterval?.location.postcode}\`
                    : 'No location selected'"></p>
                            </div>

                            <!-- Employee -->
                            <div class="flex items-start gap-2" x-show="summary.employee?.fullname">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-shield-user-icon lucide-shield-user w-4 h-4 mt-0.5 text-primary-400">
                                    <path
                                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                    <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
                                    <circle cx="12" cy="11" r="4" />
                                </svg>
                                <p
                                    x-text="summary.employee ? summary.employee[getStepByKey('employee')?.nameFormat] : 'No employee selected'">
                                </p>
                            </div>
                        </div>
                    </div>

                    <p class="text-base font-medium text-gray-600" x-html="getStepByKey('submit').labels.upperText">
                    </p>

                    <form x-data="{
                        schema: JSON.parse(JSON.stringify(getStepByKey('submit').fields)),
                        formData: {},
                        errors: {},

                        init() {
                          for (const key in this.schema) {
                            const field = this.schema[key];
                            this.formData[key] = field.value ?? (field.type === 'checkbox' ? false : '');
                            this.errors[key] = '';
                          }
                        },

                        validateField(field) {
                          const value = this.formData[field];
                          const fieldSchema = this.schema[field];
                          if (!fieldSchema) return;

                          const isEmpty =
                            value === null ||
                            value === undefined ||
                            (typeof value === 'string' && value.trim() === '') ||
                            (typeof value === 'boolean' && value === false);

                          if (fieldSchema.required && isEmpty) {
                            this.errors[field] = \`Please enter a valid \${fieldSchema.label || field}\`;
                          } else if (
                            fieldSchema.type === 'email' &&
                            value &&
                            !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)
                          ) {
                            this.errors[field] = 'Please enter a valid email address';
                          } else {
                            this.errors[field] = '';
                          }
                        },

                        async validateAll() {
                          for (const key of Object.keys(this.schema)) {
                            this.validateField(key);
                          }
                          return !Object.values(this.errors).some(Boolean);
                        },

                        focusFirstInvalidField() {
                          const firstInvalid = Object.keys(this.errors).find((key) => this.errors[key]);
                          if (firstInvalid) {
                            const el = $el.getRootNode().getElementById(this.schema[firstInvalid].key);
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              el.focus({ preventScroll: true });
                            }
                          }
                        },

                        async handleSubmit() {
                          await this.validateAll();

                          if (Object.values(this.errors).some(Boolean)) {
                            this.focusFirstInvalidField();
                            modal.toastContent = 'Please fill the form';
                            modal.showToast = true;
                            setTimeout(() => (modal.showToast = false), 1500);
                            return;
                          }

                          submitData.data = this.formData;
                          await confirm();

                          if (!submitData.error) {
                            nextStep();
                          } else {
                            modal.toastContent = submitData.error;
                            modal.showToast = true;
                            setTimeout(() => (modal.showToast = false), 1500);
                          }
                        },
                      }" x-init="init()" @submit.prevent="handleSubmit" class="grid @lg:grid-cols-12 gap-4"
                        id="infoForm">

                        <template x-for="([name, field], index) in Object.entries(schema)" :key="name">
                            <div
                                :class="field.class?.startsWith('col-') ? \`@lg:col-span-\${field.class.split('-')[1]}\` : '@lg:col-span-6'">

                                <template x-if="field.type === 'text' || field.type === 'email'">
                                    <div class="relative">
                                        <input :id="field.key" :type="field.type"
                                            :placeholder="field.placeholder ?? ' '" :required="field.required"
                                            x-model="formData[name]" :autofocus="Object.keys(schema)[0] === name"
                                            @input="validateField(name)"
                                            @focus="$el.scrollIntoView({ behavior: 'smooth', block: 'center' })"
                                            class="peer w-full rounded-md px-3 pt-5 pb-2 text-sm text-gray-800 placeholder-transparent focus:outline-none focus:border-primary-500 focus:ring-primary-500"
                                            :class="{
                  'border-rose-400': errors[name],
                  'border-gray-200': !errors[name],
                  'border': true
                }" />
                                        <label :for="field.key"
                                            class="absolute left-3 top-1.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-primary-500">
                                            <div class="flex">
                                                <span x-text="field.label"></span>
                                                <template x-if="field.required">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="lucide lucide-asterisk-icon lucide-asterisk w-3 h-3 ml-1">
                                                        <path d="M12 6v12" />
                                                        <path d="M17.196 9 6.804 15" />
                                                        <path d="m6.804 9 10.392 6" />
                                                    </svg>
                                                </template>
                                            </div>
                                        </label>
                                    </div>
                                </template>

                                <!-- HTML5 date input (e.g. birthday) -->
                                <template x-if="field.type === 'date'">
                                    <div class="relative">
                                        <input
                                            :id="field.key"
                                            type="date"
                                            :placeholder="field.placeholder ?? ' '"
                                            :required="field.required"
                                            x-model="formData[name]"
                                            :autofocus="Object.keys(schema)[0] === name"
                                            @input="validateField(name)"
                                            @focus="$el.scrollIntoView({ behavior: 'smooth', block: 'center' })"
                                            class="peer w-full rounded-md px-3 pt-5 pb-2 text-sm text-gray-800 placeholder-transparent focus:outline-none focus:border-primary-500 focus:ring-primary-500"
                                            :class="{
                  'border-rose-400': errors[name],
                  'border-gray-200': !errors[name],
                  'border': true
                }"
                                        />
                                        <label
                                            :for="field.key"
                                            class="absolute left-3 top-1.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-primary-500"
                                        >
                                            <div class="flex">
                                                <span x-text="field.label"></span>
                                                <template x-if="field.required">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="lucide lucide-asterisk-icon lucide-asterisk w-3 h-3 ml-1">
                                                        <path d="M12 6v12" />
                                                        <path d="M17.196 9 6.804 15" />
                                                        <path d="m6.804 9 10.392 6" />
                                                    </svg>
                                                </template>
                                            </div>
                                        </label>
                                    </div>
                                </template>

                                <template x-if="field.type === 'textarea'">
                                    <div class="relative">
                                        <textarea @focus="$el.scrollIntoView({ behavior: 'smooth', block: 'center' })"
                                            :id="field.key" :rows="field.rows || 3"
                                            :placeholder="field.placeholder ?? ' '" :required="field.required"
                                            x-model="formData[name]" @input="validateField(name)"
                                            class="peer w-full rounded-md px-3 pt-5 pb-2 text-sm text-gray-800 placeholder-transparent focus:outline-none focus:border-primary-500 focus:ring-primary-500 resize-none"
                                            :class="{
                  'border-rose-500': errors[name],
                  'border-gray-200': !errors[name],
                  'border': true
                }"></textarea>
                                        <label :for="field.key"
                                            class="absolute left-3 top-1.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-primary-500">
                                            <div class="flex">
                                                <span x-text="field.label"></span>
                                                <template x-if="field.required">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="lucide lucide-asterisk-icon lucide-asterisk w-3 h-3 ml-1">
                                                        <path d="M12 6v12" />
                                                        <path d="M17.196 9 6.804 15" />
                                                        <path d="m6.804 9 10.392 6" />
                                                    </svg>
                                                </template>
                                            </div>
                                        </label>
                                    </div>
                                </template>

                                <template x-if="field.type === 'checkbox'">
                                    <div class="flex items-start space-x-3">
                                        <input type="checkbox" x-model="formData[name]" :id="field.key"
                                            @change="validateField(name)"
                                            class="h-5 w-5 rounded text-primary-500 focus:ring-primary-500 transition"
                                            :class=" { 'border-rose-500' : errors[name], 'border-gray-300' : !errors[name] }" />
                                        <div class="text-sm text-gray-700 space-x-1">
                                            <label :for="field.key" x-text="field.label"></label>
                                            <template x-if="field.href">
                                                <a :href="field.href" target="_blank"
                                                    class="text-blue-500 hover:underline" x-text="field.help"></a>
                                            </template>
                                        </div>
                                    </div>
                                </template>

                            </div>
                        </template>
                    </form>

                    <p class="text-sm text-gray-500" x-html="getStepByKey('submit').labels.footerText"></p>
                </div>

                <!-- STEP 5 Ends -->
            </div>

            <div x-show="currentStep !== 6 && !getError()"
                class="bg-white h-15 border-t border-gray-200 flex justify-end px-8 py-2">
                <button type="button" aria-label="Continue to next step" x-show="currentKey !== 'submit'"
                    @click="handleNextStepClick($event)"
                    class="pl-6 px-4 py-2.5 rounded-md bg-primary-500 hover:bg-primary-600 font-semibold text-body-100 transition flex justify-center items-center gap-2"
                    :class="isStepCompleted(currentKey) ? 'cursor-pointer' : 'cursor-not-allowed'"
                    data-test-next-button="true">
                    <span x-text="currentKey === 'employee' && !summary.employee
                                                                ? (getStepByKey(currentKey)?.labels?.allowAll)
                                                                : (getStepByKey(currentKey)?.labels?.button)">
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-right-icon lucide-chevron-right text-2xl">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>

                <div class="flex justify-end" x-show="currentKey === 'submit'">
                    <button
                        @click="$el.getRootNode().querySelector('#infoForm').dispatchEvent(new Event('submit', { bubbles: true }))"
                        type="submit"
                        class="flex items-center gap-2 px-4 py-2.5 bg-primary-500 font-semibold text-body-100 rounded-md cursor-pointer transition hover:bg-primary-600 active:scale-95 disabled:cursor-not-allowed"
                        x-bind:disabled="submitData.isSubmitting"
                        data-test-submit-button="true">
                        <span x-text="getStepByKey(currentKey).labels.button"></span>

                        <span x-show="submitData.isSubmitting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-loader-circle-icon lucide-loader-circle animate-spin">
                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                        </span>
                        <span x-show="!submitData.isSubmitting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </span>
                    </button>
                </div>


                <!-- TOAST -->
                <div x-show="modal.showToast" :style="\`font-family: \${$store.theme.fontFamily}\`;"
                    class="z-[9999999] fixed top-6 left-1/2 -translate-x-1/2 bg-yellow-50 text-yellow-800 shadow-lg flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 w-[85%] lg:w-auto"
                    x-transition:enter="transition ease-out duration-300 transform"
                    x-transition:enter-start="opacity-0 -translate-y-6"
                    x-transition:enter-end="opacity-100 translate-y-0"
                    x-transition:leave="transition ease-in duration-300 transform"
                    x-transition:leave-start="opacity-100 translate-y-0"
                    x-transition:leave-end="opacity-0 -translate-y-6" x-transition:leave-start="opacity-100 scale-100"
                    x-transition:leave-end="opacity-0 -translate-y-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-circle-alert-icon lucide-circle-alert text-yellow-600 text-2xl">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <p class="text-sm font-medium" x-text="modal.toastContent"></p>
                </div>
            </div>
        </div>

        <!-- STEP 6 -->
        <div x-show="currentKey === 'thankyou'" x-transition:enter="ease-out duration-500"
            x-transition:enter-start="opacity-0 " x-transition:enter-end="opacity-100" data-test-step="thankyou"
            x-effect="if (currentStep === 6 && getStepByKey('thankyou').animation) {  $store.utils.showConfetti(); }"
            class="relative h-dvh md:h-[80dvh] lg:h-[640px] xl:h-[620px] 2xl:h-[720px] overflow-hidden grid @3xl:grid-cols-2
      grid-rows-1">
            <section class="relative bg-primary-500 flex flex-col justify-center text-body-100">
                <div class="flex flex-col justify-center items-center">
                    <div
                        class="border-4 rounded-full w-12 h-12 flex items-center justify-center mb-4 animate-pop shadow-xl bg-body-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-check-icon lucide-check w-14 h-14 lg:w-8 lg:h-8 text-primary-500">
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                    </div>
                    <h3 class="uppercase font-bold text-2xl lg:text-xl" x-text="steps.at(-1).labels.title">
                    </h3>
                    <h4 class="uppercase font-medium text-center text-xs mt-1" x-html="steps.at(-1).labels.text"></h4>

                    <button x-show="currentStep === 6" @click="modal.close()"
                        class="md:hidden absolute top-2 right-2 flex items-center justify-center text-white-700 w-12 h-12 border-2 border-transparent hover:border-white-500 cursor-pointer rounded-full transition"
                        data-test-thankyou-close="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-x-icon lucide-x w-8 h-8">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                <div class="@3xl:mx-8 mx-3 mt-4 bg-white rounded-xl p-6 shadow-sm">
                    <div class="grid grid-cols-1 gap-2 text-sm text-gray-700">

                        <!-- Location -->
                        <div x-data="{
                get location() {
                  return schedules.selectedInterval?.location || null;
                }
              }" class="flex items-start gap-3">
                            <!-- Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin w-5 h-5 text-primary-500 mt-0.5">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>

                            <!-- Location Info -->
                            <div>
                                <p class="text-gray-500 font-medium mb-1" x-text="location?.name"></p>
                                <p class="font-semibold"
                                    x-text="location ? \`\${location.street}, \${location.name} \${location.postcode}\` : 'No location selected'">
                                </p>

                                <!-- Contact Links -->
                                <div class="flex gap-2 flex-wrap my-2">
                                    <!-- Email -->
                                    <a :href="location?.email ? \`mailto:\${location.email}\` : '#'"
                                        class="d-flex items-center gap-1 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-body-100 transition-colors duration-200 px-3 py-1 text-sm"
                                        x-show="location?.email">
                                        <svg style="display: inline-block;" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-mail-icon lucide-mail h-4 w-4 ">
                                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                        </svg>
                                        <span>Email</span>
                                    </a>

                                    <!-- Phone -->
                                    <a :href="location?.phone ? \`tel:\${location.phone}\` : '#'"
                                        class="d-flex items-center gap-1 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-body-100 transition-colors duration-200 px-3 py-1 text-sm"
                                        x-show="location?.phone">
                                        <svg style="display: inline-block;" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-phone-icon lucide-phone w-4 h-4">
                                            <path
                                                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                        </svg>
                                        <span>Phone</span>
                                    </a>

                                    <!-- Website -->
                                    <a :href="location?.website ? \`https://\${location.website}\` : '#'" target="_blank"
                                        class="d-flex items-center gap-1 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-body-100 transition-colors duration-200 px-3 py-1 text-sm"
                                        x-show="location?.website">
                                        <svg style="display: inline-block;" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-globe-icon lucide-globe w-4 h-4">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                            <path d="M2 12h20" />
                                        </svg>
                                        <span>Website</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Date & TIme -->
                        <div class="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-calendar-clock-icon lucide-calendar-clock w-5 h-5 text-primary-500 mt-0.5">
                                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                                <path d="M16 2v4" />
                                <path d="M8 2v4" />
                                <path d="M3 10h5" />
                                <path d="M17.5 17.5 16 16.3V14" />
                                <circle cx="16" cy="16" r="6" />
                            </svg>
                            <div>
                                <p class="text-gray-500 font-medium mb-1" x-text="getStepByKey('schedule').labels.menu">
                                </p>
                                <p class="font-semibold">
                                    <span
                                        x-text="summary.date
    ? $store.i18n.t('onAt', {
        date: $store.utils.formatReadableDate(summary.date),
        time: $store.utils.extractHourMinute(summary.slot?.start)
      })
    : $store.i18n.t('dateTimeNotSelected')">
                                    </span>
                                </p>
                            </div>
                        </div>


                        <!-- Employee -->
                        <div class="flex items-start gap-3" x-show="summary.employee?.fullname">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-shield-user-icon lucide-shield-user w-5 h-5 text-primary-500 mt-0.5">
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
                                <circle cx="12" cy="11" r="4" />
                            </svg>
                            <div>
                                <p class="text-gray-500 font-medium mb-1"
                                    x-text="getStepByKey('employee')?.labels.menu">
                                </p>
                                <p class="font-semibold"
                                    x-text="summary.employee ? summary.employee[getStepByKey('employee')?.nameFormat] : 'No employee selected'">
                                </p>
                            </div>
                        </div>
                        <!-- Product -->
                        <div class="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-hand-heart-icon lucide-hand-heart w-5 h-5 text-primary-500 mt-1 shrink-0">
                                <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                                <path
                                    d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                                <path d="m2 15 6 6" />
                                <path
                                    d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                            </svg>
                            <div class="w-full">
                                <p class="text-gray-500 font-medium mb-1" x-text="getStepByKey('service').labels.menu">
                                </p>
                                <template x-if="summary.products.length">
                                    <ul class="space-y-1 pl-1">
                                        <template x-for="product in summary.products" :key="product.id">
                                            <li class="font-semibold text-gray-700" x-text="product.plugin_text"></li>
                                        </template>
                                    </ul>
                                </template>
                                <template x-if="!summary.products.length">
                                    <p class="font-semibold text-gray-700">
                                        No service selected
                                    </p>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-1 text-xs mt-3 @3xl:mx-8 mx-3">
                    <a target="_blank" :href="isAllValid ? $store.utils.generateGoogleCalendarLink(summary) : ''" class="bg-body-100 text-primary-500 flex justify-center items-center gap-1
                           py-2 px-3 rounded-md font-semibold transition-all duration-300
                           @3xl:py-3 @3xl:px-6 @3xl:rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="w-4 h-4 @3xl:w-5 @3xl:h-5">
                            <path d="M16 19h6" />
                            <path d="M16 2v4" />
                            <path d="M19 16v6" />
                            <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
                            <path d="M3 10h18" />
                            <path d="M8 2v4" />
                        </svg>
                        <span class="mt-0.5" x-text="getStepByKey('thankyou').labels.addToCalendar"></span>
                    </a>

                    <a :href="$store.utils.generateGoogleMapsLink(schedules.selectedInterval?.location)" target="_blank"
                        class="border border-body-100 text-body-100 hover:bg-body-100 hover:text-primary-500 hover:border-transparent
                           transition-all duration-300 flex justify-center items-center gap-1
                           py-2 px-3 rounded-md font-semibold
                           @3xl:py-3 @3xl:px-6 @3xl:rounded-lg">
                        <span x-text="getStepByKey('thankyou').labels.getDirection"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="w-4 h-4 @3xl:w-5 @3xl:h-5">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </a>
                </div>

                <p class="mt-6 text-center w-full text-body-100 opacity-30 font-medium text-sm uppercase"
                    x-html="modal.menuLabels?.footer || ''"></p>
            </section>

            <section
                class="hidden @3xl:block p-6 py-8 space-y-6 text-sm text-gray-800 bg-gray-50 rounded-lg shadow-inner relative overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 rounded-tl-0">
                <div class="flex justify-between mb-2">
                    <h2 class="text-xl font-semibold flex items-center gap-2 text-primary-500"
                        x-text="steps.at(-1).labels.userInfo"></h2>
                    <button x-show="currentStep === 6" @click="modal.close()"
                        class="flex items-center justify-center text-primary-500 w-10 h-10 border-2 border-transparent hover:border-primary-500 cursor-pointer rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-x-icon lucide-x text-3xl">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
                <div class="bg-white shadow-sm overflow-hidden">
                    <template x-if="submitData.data">
                        <div>
                            <template
                                x-for="([key, value], i) in Object.entries(submitData.data).filter(([_, val]) => val !== '')"
                                :key="key">
                                <div x-show="!getStepByKey('submit').fields[key].hideConfirmation"
                                    class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-6 py-3 transition-colors duration-150 ease-in-out"
                                    :class="i % 2 === 0 ? 'bg-white' : 'bg-zinc-100'">
                                    <!-- Label -->
                                    <div class="md:w-1/4 text-sm text-gray-600 capitalize tracking-wide"
                                        x-text="getStepByKey('submit').fields[key].label">
                                    </div>

                                    <!-- Value -->
                                    <div class="flex-1 text-right text-sm font-semibold text-gray-800 break-words">
                                        <template x-if="value === true">
                                            <span
                                                class="inline-flex items-center gap-2 px-3 py-1 text-green-700 bg-green-100 rounded-full font-medium">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M20 6 9 17l-5-5" />
                                                </svg>
                                                Yes
                                            </span>
                                        </template>

                                        <template x-if="value === false">
                                            <span
                                                class="inline-flex items-center gap-2 px-3 py-1 text-red-700 bg-red-100 rounded-full font-medium">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M18 6 6 18" />
                                                    <path d="M6 6l12 12" />
                                                </svg>
                                                No
                                            </span>
                                        </template>

                                        <template x-if="typeof value !== 'boolean'">
                                            <span x-text="value"></span>
                                        </template>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
            </section>
        </div>
    </div>
</div>
`,Ki=`/*! tailwindcss v4.1.10 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-100:oklch(96.2% .044 156.743);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-blue-500:oklch(62.3% .214 259.815);--color-rose-400:oklch(71.2% .194 13.428);--color-rose-500:oklch(64.5% .246 16.439);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--radius-4xl:2rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--animate-bounce:bounce 1s infinite;--blur-2xl:40px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary-400:"var(--color-primary-400)";--color-primary-500:"var(--color-primary-500)";--color-primary-600:"var(--color-primary-600)";--color-secondary-400:"var(--color-secondary-400)";--color-secondary-500:"var(--color-secondary-500)";--color-secondary-600:"var(--color-secondary-600)";--color-tertiary-400:"var(--color-tertiary-400)";--color-tertiary-500:"var(--color-tertiary-500)";--color-tertiary-600:"var(--color-tertiary-600)";--color-body-100:"var(--color-body-100)";--color-body-200:"var(--color-body-200)";--color-body-300:"var(--color-body-300)";--color-toggle-100:"var(--color-toggle-100)";--color-toggle-200:"var(--color-toggle-200)";--animate-pop:pop .5s ease-out forwards}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}[type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;--tw-shadow:0 0 #0000;background-color:#fff;border-width:1px;border-color:#6a7282;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}:is([type=text],input:where(:not([type])),[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select):focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#155dfc;outline:2px solid #0000}input::placeholder,textarea::placeholder{color:#6a7282;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-date-and-time-value{text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-year-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-month-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-day-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-hour-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-minute-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-second-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-millisecond-field{padding-top:0;padding-bottom:0}::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{-webkit-print-color-adjust:exact;print-color-adjust:exact;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='oklch(55.1%25 0.027 264.364)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem}[multiple],[size]:where(select:not([size="1"])){background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;-webkit-print-color-adjust:unset;print-color-adjust:unset;padding-right:.75rem}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:middle;-webkit-user-select:none;user-select:none;color:#155dfc;--tw-shadow:0 0 #0000;background-color:#fff;background-origin:border-box;border-width:1px;border-color:#6a7282;flex-shrink:0;width:1rem;height:1rem;padding:0;display:inline-block}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline-offset:2px;--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% .245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid #0000}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=checkbox]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}@media (forced-colors:active){[type=radio]:checked{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{background-color:currentColor;border-color:#0000}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:#0000}@media (forced-colors:active){[type=checkbox]:indeterminate{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{background-color:currentColor;border-color:#0000}[type=file]{background:unset;border-color:inherit;font-size:unset;line-height:inherit;border-width:0;border-radius:0;padding:0}[type=file]:focus{outline:1px solid buttontext;outline:1px auto -webkit-focus-ring-color}*{scrollbar-color:initial;scrollbar-width:initial}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.\\!collapse{visibility:collapse!important}.collapse{visibility:collapse}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.-top-1{top:calc(var(--spacing)*-1)}.top-0{top:calc(var(--spacing)*0)}.top-1\\.5{top:calc(var(--spacing)*1.5)}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-6{top:calc(var(--spacing)*6)}.-right-1{right:calc(var(--spacing)*-1)}.-right-8{right:calc(var(--spacing)*-8)}.right-0{right:calc(var(--spacing)*0)}.right-2{right:calc(var(--spacing)*2)}.right-4{right:calc(var(--spacing)*4)}.right-10{right:calc(var(--spacing)*10)}.bottom-10{bottom:calc(var(--spacing)*10)}.left-0{left:calc(var(--spacing)*0)}.left-1\\/2{left:50%}.left-3{left:calc(var(--spacing)*3)}.z-10{z-index:10}.z-50{z-index:50}.z-\\[9999999\\]{z-index:9999999}.col-3{grid-column:3}.col-6{grid-column:6}.col-9{grid-column:9}.col-12{grid-column:12}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:50rem){.container{max-width:50rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}@media (min-width:120rem){.container{max-width:120rem}}@media (min-width:140rem){.container{max-width:140rem}}.m-1{margin:calc(var(--spacing)*1)}.m-6{margin:calc(var(--spacing)*6)}.mx-3{margin-inline:calc(var(--spacing)*3)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing)*2)}.my-4{margin-block:calc(var(--spacing)*4)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.scrollbar-thin::-webkit-scrollbar-track{background-color:var(--scrollbar-track);border-radius:var(--scrollbar-track-radius)}.scrollbar-thin::-webkit-scrollbar-thumb{background-color:var(--scrollbar-thumb);border-radius:var(--scrollbar-thumb-radius)}.scrollbar-thin::-webkit-scrollbar-corner{background-color:var(--scrollbar-corner);border-radius:var(--scrollbar-corner-radius)}.scrollbar-thin{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb,initial)var(--scrollbar-track,initial)}.scrollbar-thin::-webkit-scrollbar{width:8px;height:8px;display:block}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-15{height:calc(var(--spacing)*15)}.h-16{height:calc(var(--spacing)*16)}.h-\\[72px\\]{height:72px}.h-auto{height:auto}.h-dvh{height:100dvh}.h-full{height:100%}.h-screen{height:100vh}.max-h-12{max-height:calc(var(--spacing)*12)}.min-h-10{min-height:calc(var(--spacing)*10)}.w-1\\/3{width:33.3333%}.w-1\\/4{width:25%}.w-1\\/5{width:20%}.w-2{width:calc(var(--spacing)*2)}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-2\\/3{width:66.6667%}.w-2\\/5{width:40%}.w-3{width:calc(var(--spacing)*3)}.w-3\\/5{width:60%}.w-4{width:calc(var(--spacing)*4)}.w-4\\/5{width:80%}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-9{width:calc(var(--spacing)*9)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-14{width:calc(var(--spacing)*14)}.w-16{width:calc(var(--spacing)*16)}.w-20{width:calc(var(--spacing)*20)}.w-24{width:calc(var(--spacing)*24)}.w-\\[85\\%\\]{width:85%}.w-auto{width:auto}.w-full{width:100%}.w-max{width:max-content}.w-screen{width:100vw}.max-w-7xl{max-width:var(--container-7xl)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-4{--tw-translate-x:calc(var(--spacing)*-4);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-4{--tw-translate-x:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-6{--tw-translate-y:calc(var(--spacing)*-6);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-50{--tw-translate-y:calc(var(--spacing)*-50);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-4{--tw-translate-y:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-6{--tw-translate-y:calc(var(--spacing)*6);translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-70{--tw-scale-x:70%;--tw-scale-y:70%;--tw-scale-z:70%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-75{--tw-scale-x:75%;--tw-scale-y:75%;--tw-scale-z:75%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-120{--tw-scale-x:120%;--tw-scale-y:120%;--tw-scale-z:120%;scale:var(--tw-scale-x)var(--tw-scale-y)}.rotate-0{rotate:none}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.animate-pop{animation:var(--animate-pop)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-\\[120px_1fr\\]{grid-template-columns:120px 1fr}.grid-cols-\\[250px_1fr\\]{grid-template-columns:250px 1fr}.grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-0\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*.5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-0\\.5{column-gap:calc(var(--spacing)*.5)}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*3)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.self-start{align-self:flex-start}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-4xl{border-radius:var(--radius-4xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-body-100{border-color:var(--color-body-100)}.border-body-200{border-color:var(--color-body-200)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-primary-400\\/10{border-color:color-mix(in srgb,"var(--color-primary-400)" 10%,transparent)}@supports (color:color-mix(in lab,red,red)){.border-primary-400\\/10{border-color:color-mix(in oklab,var(--color-primary-400)10%,transparent)}}.border-primary-500{border-color:var(--color-primary-500)}.border-red-200{border-color:var(--color-red-200)}.border-rose-400{border-color:var(--color-rose-400)}.border-rose-500{border-color:var(--color-rose-500)}.border-tertiary-500{border-color:var(--color-tertiary-500)}.border-transparent{border-color:#0000}.border-white{border-color:var(--color-white)}.bg-black\\/10{background-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.bg-black\\/10{background-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.bg-body-100{background-color:var(--color-body-100)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-green-100{background-color:var(--color-green-100)}.bg-primary-400{background-color:var(--color-primary-400)}.bg-primary-400\\/10{background-color:color-mix(in srgb,"var(--color-primary-400)" 10%,transparent)}@supports (color:color-mix(in lab,red,red)){.bg-primary-400\\/10{background-color:color-mix(in oklab,var(--color-primary-400)10%,transparent)}}.bg-primary-500{background-color:var(--color-primary-500)}.bg-primary-500\\/10{background-color:color-mix(in srgb,"var(--color-primary-500)" 10%,transparent)}@supports (color:color-mix(in lab,red,red)){.bg-primary-500\\/10{background-color:color-mix(in oklab,var(--color-primary-500)10%,transparent)}}.bg-primary-600{background-color:var(--color-primary-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-secondary-500{background-color:var(--color-secondary-500)}.bg-tertiary-500{background-color:var(--color-tertiary-500)}.bg-toggle-200{background-color:var(--color-toggle-200)}.bg-white{background-color:var(--color-white)}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-zinc-50{background-color:var(--color-zinc-50)}.bg-zinc-100{background-color:var(--color-zinc-100)}.stroke-primary-500{stroke:var(--color-primary-500)}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-5{padding-top:calc(var(--spacing)*5)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pb-8{padding-bottom:calc(var(--spacing)*8)}.pb-24{padding-bottom:calc(var(--spacing)*24)}.pb-32{padding-bottom:calc(var(--spacing)*32)}.pl-1{padding-left:calc(var(--spacing)*1)}.pl-6{padding-left:calc(var(--spacing)*6)}.text-center{text-align:center}.text-right{text-align:right}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.break-words{overflow-wrap:break-word}.whitespace-nowrap{white-space:nowrap}.text-blue-500{color:var(--color-blue-500)}.text-body-100{color:var(--color-body-100)}.text-body-200{color:var(--color-body-200)}.text-body-300{color:var(--color-body-300)}.text-current{color:currentColor}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-green-600{color:var(--color-green-600)}.text-green-700{color:var(--color-green-700)}.text-primary-400{color:var(--color-primary-400)}.text-primary-500{color:var(--color-primary-500)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-toggle-100{color:var(--color-toggle-100)}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-800{color:var(--color-yellow-800)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.placeholder-transparent::placeholder{color:#0000}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-70{opacity:.7}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-primary-500{--tw-shadow-color:"var(--color-primary-500)"}@supports (color:color-mix(in lab,red,red)){.shadow-primary-500{--tw-shadow-color:color-mix(in oklab,var(--color-primary-500)var(--tw-shadow-alpha),transparent)}}.ring-primary-500{--tw-ring-color:var(--color-primary-500)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-2xl{--tw-backdrop-blur:blur(var(--blur-2xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.scrollbar-thumb-gray-300{--scrollbar-thumb:oklch(87.2% .01 258.338)}.scrollbar-track-gray-50{--scrollbar-track:oklch(98.5% .002 247.839)}.not-last\\:mb-3:not(:last-child){margin-bottom:calc(var(--spacing)*3)}@media (hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}}.peer-placeholder-shown\\:top-2\\.5:is(:where(.peer):placeholder-shown~*){top:calc(var(--spacing)*2.5)}.peer-placeholder-shown\\:text-base:is(:where(.peer):placeholder-shown~*){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.peer-placeholder-shown\\:text-gray-400:is(:where(.peer):placeholder-shown~*){color:var(--color-gray-400)}.peer-focus\\:top-1\\.5:is(:where(.peer):focus~*){top:calc(var(--spacing)*1.5)}.peer-focus\\:text-sm:is(:where(.peer):focus~*){font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.peer-focus\\:text-primary-500:is(:where(.peer):focus~*){color:var(--color-primary-500)}.last\\:mb-12:last-child{margin-bottom:calc(var(--spacing)*12)}@media (hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:border-primary-500:hover{border-color:var(--color-primary-500)}.hover\\:border-transparent:hover{border-color:#0000}.hover\\:bg-body-100:hover{background-color:var(--color-body-100)}.hover\\:bg-primary-400:hover{background-color:var(--color-primary-400)}.hover\\:bg-primary-500:hover{background-color:var(--color-primary-500)}.hover\\:bg-primary-600:hover{background-color:var(--color-primary-600)}.hover\\:bg-tertiary-600\\/70:hover{background-color:color-mix(in srgb,"var(--color-tertiary-600)" 70%,transparent)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-tertiary-600\\/70:hover{background-color:color-mix(in oklab,var(--color-tertiary-600)70%,transparent)}}.hover\\:bg-white\\/80:hover{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/80:hover{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.hover\\:text-body-100:hover{color:var(--color-body-100)}.hover\\:text-primary-500:hover{color:var(--color-primary-500)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:border-primary-500:focus{border-color:var(--color-primary-500)}.focus\\:ring-primary-500:focus{--tw-ring-color:var(--color-primary-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:translate-y-0\\.5:active{--tw-translate-y:calc(var(--spacing)*.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.active\\:translate-y-1:active{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.active\\:outline-0:active{outline-style:var(--tw-outline-style);outline-width:0}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media (min-width:40rem){.sm\\:translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.sm\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.sm\\:gap-4{gap:calc(var(--spacing)*4)}.sm\\:rounded-2xl{border-radius:var(--radius-2xl)}.sm\\:rounded-3xl{border-radius:var(--radius-3xl)}.sm\\:rounded-4xl{border-radius:var(--radius-4xl)}.sm\\:rounded-full{border-radius:3.40282e38px}.sm\\:rounded-lg{border-radius:var(--radius-lg)}.sm\\:rounded-md{border-radius:var(--radius-md)}.sm\\:rounded-none{border-radius:0}.sm\\:rounded-sm{border-radius:var(--radius-sm)}.sm\\:rounded-xl{border-radius:var(--radius-xl)}}@media (min-width:48rem){.md\\:hidden{display:none}.md\\:h-5{height:calc(var(--spacing)*5)}.md\\:h-\\[80dvh\\]{height:80dvh}.md\\:w-1\\/4{width:25%}.md\\:w-5{width:calc(var(--spacing)*5)}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}}@media (min-width:50rem){.lg\\:h-8{height:calc(var(--spacing)*8)}.lg\\:h-\\[600px\\]{height:600px}.lg\\:w-8{width:calc(var(--spacing)*8)}.lg\\:w-auto{width:auto}.lg\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@media (min-width:80rem){.xl\\:h-\\[620px\\]{height:620px}}@media (min-width:96rem){.\\32xl\\:h-\\[720px\\]{height:720px}}@container (min-width:24rem){.\\@sm\\:w-full{width:100%}.\\@sm\\:px-0{padding-inline:calc(var(--spacing)*0)}}@container (min-width:28rem){.\\@md\\:w-\\[90\\%\\]{width:90%}.\\@md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@container (min-width:32rem){.\\@lg\\:col-span-1{grid-column:span 1/span 1}.\\@lg\\:col-span-2{grid-column:span 2/span 2}.\\@lg\\:col-span-3{grid-column:span 3/span 3}.\\@lg\\:col-span-4{grid-column:span 4/span 4}.\\@lg\\:col-span-5{grid-column:span 5/span 5}.\\@lg\\:col-span-6{grid-column:span 6/span 6}.\\@lg\\:col-span-7{grid-column:span 7/span 7}.\\@lg\\:col-span-8{grid-column:span 8/span 8}.\\@lg\\:col-span-9{grid-column:span 9/span 9}.\\@lg\\:col-span-10{grid-column:span 10/span 10}.\\@lg\\:col-span-11{grid-column:span 11/span 11}.\\@lg\\:col-span-12{grid-column:span 12/span 12}.\\@lg\\:w-\\[82\\%\\]{width:82%}.\\@lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.\\@lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@container (min-width:36rem){.\\@xl\\:col-span-2{grid-column:span 2/span 2}.\\@xl\\:col-span-3{grid-column:span 3/span 3}.\\@xl\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.\\@xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@container (min-width:42rem){.\\@2xl\\:col-span-1{grid-column:span 1/span 1}}@container (min-width:48rem){.\\@3xl\\:mx-8{margin-inline:calc(var(--spacing)*8)}.\\@3xl\\:block{display:block}.\\@3xl\\:grid{display:grid}.\\@3xl\\:hidden{display:none}.\\@3xl\\:h-5{height:calc(var(--spacing)*5)}.\\@3xl\\:w-5{width:calc(var(--spacing)*5)}.\\@3xl\\:w-\\[90\\%\\]{width:90%}.\\@3xl\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.\\@3xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@3xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@3xl\\:grid-cols-\\[250px_1fr\\]{grid-template-columns:250px 1fr}.\\@3xl\\:rounded-lg{border-radius:var(--radius-lg)}.\\@3xl\\:px-4{padding-inline:calc(var(--spacing)*4)}.\\@3xl\\:px-6{padding-inline:calc(var(--spacing)*6)}.\\@3xl\\:px-8{padding-inline:calc(var(--spacing)*8)}.\\@3xl\\:py-3{padding-block:calc(var(--spacing)*3)}.\\@3xl\\:py-12{padding-block:calc(var(--spacing)*12)}}@container (min-width:64rem){.\\@5xl\\:col-span-2{grid-column:span 2/span 2}.\\@5xl\\:w-3\\/4{width:75%}.\\@5xl\\:w-\\[72\\%\\]{width:72%}.\\@5xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@5xl\\:grid-cols-\\[320px_1fr\\]{grid-template-columns:320px 1fr}}@container (min-width:96rem){.\\@8xl\\:block{display:block}}}[x-cloak]{display:none!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}@keyframes pop{0%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1.2)}to{opacity:1;transform:scale(1)}}
`;var rn=!1,an=!1,Fe=[],sn=-1;function Ui(e){qi(e)}function qi(e){Fe.includes(e)||Fe.push(e),Vi()}function Gi(e){let t=Fe.indexOf(e);t!==-1&&t>sn&&Fe.splice(t,1)}function Vi(){!an&&!rn&&(rn=!0,queueMicrotask(Ji))}function Ji(){rn=!1,an=!0;for(let e=0;e<Fe.length;e++)Fe[e](),sn=e;Fe.length=0,sn=-1,an=!1}var qe,Pe,Ge,fr,on=!0;function Zi(e){on=!1,e(),on=!0}function Yi(e){qe=e.reactive,Ge=e.release,Pe=t=>e.effect(t,{scheduler:n=>{on?Ui(n):n()}}),fr=e.raw}function mr(e){Pe=e}function Xi(e){let t=()=>{};return[r=>{let a=Pe(r);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(i=>i())}),e._x_effects.add(a),t=()=>{a!==void 0&&(e._x_effects.delete(a),Ge(a))},a},()=>{t()}]}function gr(e,t){let n=!0,r,a=Pe(()=>{let i=e();JSON.stringify(i),n?r=i:queueMicrotask(()=>{t(i,r),r=i}),n=!1});return()=>Ge(a)}var yr=[],wr=[],vr=[];function Qi(e){vr.push(e)}function ln(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,wr.push(t))}function xr(e){yr.push(e)}function br(e,t,n){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(n)}function kr(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([n,r])=>{(t===void 0||t.includes(n))&&(r.forEach(a=>a()),delete e._x_attributeCleanups[n])})}function es(e){var t,n;for((t=e._x_effects)==null||t.forEach(Gi);(n=e._x_cleanups)!=null&&n.length;)e._x_cleanups.pop()()}var cn=new MutationObserver(hn),dn=!1;function un(){cn.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),dn=!0}function Sr(){ts(),cn.disconnect(),dn=!1}var at=[];function ts(){let e=cn.takeRecords();at.push(()=>e.length>0&&hn(e));let t=at.length;queueMicrotask(()=>{if(at.length===t)for(;at.length>0;)at.shift()()})}function ee(e){if(!dn)return e();Sr();let t=e();return un(),t}var pn=!1,St=[];function ns(){pn=!0}function rs(){pn=!1,hn(St),St=[]}function hn(e){if(pn){St=St.concat(e);return}let t=[],n=new Set,r=new Map,a=new Map;for(let i=0;i<e.length;i++)if(!e[i].target._x_ignoreMutationObserver&&(e[i].type==="childList"&&(e[i].removedNodes.forEach(s=>{s.nodeType===1&&s._x_marker&&n.add(s)}),e[i].addedNodes.forEach(s=>{if(s.nodeType===1){if(n.has(s)){n.delete(s);return}s._x_marker||t.push(s)}})),e[i].type==="attributes")){let s=e[i].target,o=e[i].attributeName,l=e[i].oldValue,c=()=>{r.has(s)||r.set(s,[]),r.get(s).push({name:o,value:s.getAttribute(o)})},p=()=>{a.has(s)||a.set(s,[]),a.get(s).push(o)};s.hasAttribute(o)&&l===null?c():s.hasAttribute(o)?(p(),c()):p()}a.forEach((i,s)=>{kr(s,i)}),r.forEach((i,s)=>{yr.forEach(o=>o(s,i))});for(let i of n)t.some(s=>s.contains(i))||wr.forEach(s=>s(i));for(let i of t)i.isConnected&&vr.forEach(s=>s(i));t=null,n=null,r=null,a=null}function _r(e){return st(Ve(e))}function it(e,t,n){return e._x_dataStack=[t,...Ve(n||e)],()=>{e._x_dataStack=e._x_dataStack.filter(r=>r!==t)}}function Ve(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?Ve(e.host):e.parentNode?Ve(e.parentNode):[]}function st(e){return new Proxy({objects:e},as)}var as={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(n=>Object.prototype.hasOwnProperty.call(n,t)||Reflect.has(n,t))},get({objects:e},t,n){return t=="toJSON"?is:Reflect.get(e.find(r=>Reflect.has(r,t))||{},t,n)},set({objects:e},t,n,r){const a=e.find(s=>Object.prototype.hasOwnProperty.call(s,t))||e[e.length-1],i=Object.getOwnPropertyDescriptor(a,t);return i!=null&&i.set&&(i!=null&&i.get)?i.set.call(r,n)||!0:Reflect.set(a,t,n)}};function is(){return Reflect.ownKeys(this).reduce((t,n)=>(t[n]=Reflect.get(this,n),t),{})}function Er(e){let t=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,a="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([i,{value:s,enumerable:o}])=>{if(o===!1||s===void 0||typeof s=="object"&&s!==null&&s.__v_skip)return;let l=a===""?i:`${a}.${i}`;typeof s=="object"&&s!==null&&s._x_interceptor?r[i]=s.initialize(e,l,i):t(s)&&s!==r&&!(s instanceof Element)&&n(s,l)})};return n(e)}function Ar(e,t=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(r,a,i){return e(this.initialValue,()=>ss(r,a),s=>fn(r,a,s),a,i)}};return t(n),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let a=n.initialize.bind(n);n.initialize=(i,s,o)=>{let l=r.initialize(i,s,o);return n.initialValue=l,a(i,s,o)}}else n.initialValue=r;return n}}function ss(e,t){return t.split(".").reduce((n,r)=>n[r],e)}function fn(e,t,n){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=n;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),fn(e[t[0]],t.slice(1),n)}}var Cr={};function we(e,t){Cr[e]=t}function mn(e,t){let n=os(t);return Object.entries(Cr).forEach(([r,a])=>{Object.defineProperty(e,`$${r}`,{get(){return a(t,n)},enumerable:!1})}),e}function os(e){let[t,n]=Dr(e),r={interceptor:Ar,...t};return ln(e,n),r}function ls(e,t,n,...r){try{return n(...r)}catch(a){ot(a,e,t)}}function ot(e,t,n=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:n}),console.warn(`Alpine Expression Error: ${e.message}

${n?'Expression: "'+n+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var _t=!0;function Tr(e){let t=_t;_t=!1;let n=e();return _t=t,n}function Ne(e,t,n={}){let r;return ce(e,t)(a=>r=a,n),r}function ce(...e){return Mr(...e)}var Mr=Ir;function cs(e){Mr=e}function Ir(e,t){let n={};mn(n,e);let r=[n,...Ve(e)],a=typeof t=="function"?ds(r,t):ps(r,t,e);return ls.bind(null,e,t,a)}function ds(e,t){return(n=()=>{},{scope:r={},params:a=[],context:i}={})=>{let s=t.apply(st([r,...e]),a);Et(n,s)}}var gn={};function us(e,t){if(gn[e])return gn[e];let n=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,i=(()=>{try{let s=new n(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(s,"name",{value:`[Alpine] ${e}`}),s}catch(s){return ot(s,t,e),Promise.resolve()}})();return gn[e]=i,i}function ps(e,t,n){let r=us(t,n);return(a=()=>{},{scope:i={},params:s=[],context:o}={})=>{r.result=void 0,r.finished=!1;let l=st([i,...e]);if(typeof r=="function"){let c=r.call(o,r,l).catch(p=>ot(p,n,t));r.finished?(Et(a,r.result,l,s,n),r.result=void 0):c.then(p=>{Et(a,p,l,s,n)}).catch(p=>ot(p,n,t)).finally(()=>r.result=void 0)}}}function Et(e,t,n,r,a){if(_t&&typeof t=="function"){let i=t.apply(n,r);i instanceof Promise?i.then(s=>Et(e,s,n,r)).catch(s=>ot(s,a,t)):e(i)}else typeof t=="object"&&t instanceof Promise?t.then(i=>e(i)):e(t)}var yn="x-";function Je(e=""){return yn+e}function hs(e){yn=e}var At={};function ne(e,t){return At[e]=t,{before(n){if(!At[n]){console.warn(String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`);return}const r=$e.indexOf(n);$e.splice(r>=0?r:$e.indexOf("DEFAULT"),0,e)}}}function fs(e){return Object.keys(At).includes(e)}function wn(e,t,n){if(t=Array.from(t),e._x_virtualDirectives){let i=Object.entries(e._x_virtualDirectives).map(([o,l])=>({name:o,value:l})),s=Rr(i);i=i.map(o=>s.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),t=t.concat(i)}let r={};return t.map(Pr((i,s)=>r[i]=s)).filter($r).map(ys(r,n)).sort(ws).map(i=>gs(e,i))}function Rr(e){return Array.from(e).map(Pr()).filter(t=>!$r(t))}var vn=!1,lt=new Map,Or=Symbol();function ms(e){vn=!0;let t=Symbol();Or=t,lt.set(t,[]);let n=()=>{for(;lt.get(t).length;)lt.get(t).shift()();lt.delete(t)},r=()=>{vn=!1,n()};e(n),r()}function Dr(e){let t=[],n=o=>t.push(o),[r,a]=Xi(e);return t.push(a),[{Alpine:ut,effect:r,cleanup:n,evaluateLater:ce.bind(ce,e),evaluate:Ne.bind(Ne,e)},()=>t.forEach(o=>o())]}function gs(e,t){let n=()=>{},r=At[t.type]||n,[a,i]=Dr(e);br(e,t.original,i);let s=()=>{e._x_ignore||e._x_ignoreSelf||(r.inline&&r.inline(e,t,a),r=r.bind(r,e,t,a),vn?lt.get(Or).push(r):r())};return s.runCleanups=i,s}var Br=(e,t)=>({name:n,value:r})=>(n.startsWith(e)&&(n=n.replace(e,t)),{name:n,value:r}),Fr=e=>e;function Pr(e=()=>{}){return({name:t,value:n})=>{let{name:r,value:a}=Nr.reduce((i,s)=>s(i),{name:t,value:n});return r!==t&&e(r,t),{name:r,value:a}}}var Nr=[];function xn(e){Nr.push(e)}function $r({name:e}){return jr().test(e)}var jr=()=>new RegExp(`^${yn}([^:^.]+)\\b`);function ys(e,t){return({name:n,value:r})=>{let a=n.match(jr()),i=n.match(/:([a-zA-Z0-9\-_:]+)/),s=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=t||e[n]||n;return{type:a?a[1]:null,value:i?i[1]:null,modifiers:s.map(l=>l.replace(".","")),expression:r,original:o}}}var bn="DEFAULT",$e=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",bn,"teleport"];function ws(e,t){let n=$e.indexOf(e.type)===-1?bn:e.type,r=$e.indexOf(t.type)===-1?bn:t.type;return $e.indexOf(n)-$e.indexOf(r)}function ct(e,t,n={}){e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function je(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(a=>je(a,t));return}let n=!1;if(t(e,()=>n=!0),n)return;let r=e.firstElementChild;for(;r;)je(r,t),r=r.nextElementSibling}function ge(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Lr=!1;function vs(){Lr&&ge("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Lr=!0,document.body||ge("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),ct(document,"alpine:init"),ct(document,"alpine:initializing"),un(),Qi(t=>Te(t,je)),ln(t=>Ye(t)),xr((t,n)=>{wn(t,n).forEach(r=>r())});let e=t=>!Ct(t.parentElement,!0);Array.from(document.querySelectorAll(Wr().join(","))).filter(e).forEach(t=>{Te(t)}),ct(document,"alpine:initialized"),setTimeout(()=>{Ss()})}var kn=[],zr=[];function Hr(){return kn.map(e=>e())}function Wr(){return kn.concat(zr).map(e=>e())}function Kr(e){kn.push(e)}function Ur(e){zr.push(e)}function Ct(e,t=!1){return Ze(e,n=>{if((t?Wr():Hr()).some(a=>n.matches(a)))return!0})}function Ze(e,t){if(e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),!!e.parentElement)return Ze(e.parentElement,t)}}function xs(e){return Hr().some(t=>e.matches(t))}var qr=[];function bs(e){qr.push(e)}var ks=1;function Te(e,t=je,n=()=>{}){Ze(e,r=>r._x_ignore)||ms(()=>{t(e,(r,a)=>{r._x_marker||(n(r,a),qr.forEach(i=>i(r,a)),wn(r,r.attributes).forEach(i=>i()),r._x_ignore||(r._x_marker=ks++),r._x_ignore&&a())})})}function Ye(e,t=je){t(e,n=>{es(n),kr(n),delete n._x_marker})}function Ss(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,n,r])=>{fs(n)||r.some(a=>{if(document.querySelector(a))return ge(`found "${a}", but missing ${t} plugin`),!0})})}var Sn=[],_n=!1;function En(e=()=>{}){return queueMicrotask(()=>{_n||setTimeout(()=>{An()})}),new Promise(t=>{Sn.push(()=>{e(),t()})})}function An(){for(_n=!1;Sn.length;)Sn.shift()()}function _s(){_n=!0}function Cn(e,t){return Array.isArray(t)?Gr(e,t.join(" ")):typeof t=="object"&&t!==null?Es(e,t):typeof t=="function"?Cn(e,t()):Gr(e,t)}function Gr(e,t){let n=a=>a.split(" ").filter(i=>!e.classList.contains(i)).filter(Boolean),r=a=>(e.classList.add(...a),()=>{e.classList.remove(...a)});return t=t===!0?t="":t||"",r(n(t))}function Es(e,t){let n=o=>o.split(" ").filter(Boolean),r=Object.entries(t).flatMap(([o,l])=>l?n(o):!1).filter(Boolean),a=Object.entries(t).flatMap(([o,l])=>l?!1:n(o)).filter(Boolean),i=[],s=[];return a.forEach(o=>{e.classList.contains(o)&&(e.classList.remove(o),s.push(o))}),r.forEach(o=>{e.classList.contains(o)||(e.classList.add(o),i.push(o))}),()=>{s.forEach(o=>e.classList.add(o)),i.forEach(o=>e.classList.remove(o))}}function Tt(e,t){return typeof t=="object"&&t!==null?As(e,t):Cs(e,t)}function As(e,t){let n={};return Object.entries(t).forEach(([r,a])=>{n[r]=e.style[r],r.startsWith("--")||(r=Ts(r)),e.style.setProperty(r,a)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Tt(e,n)}}function Cs(e,t){let n=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",n||"")}}function Ts(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Tn(e,t=()=>{}){let n=!1;return function(){n?t.apply(this,arguments):(n=!0,e.apply(this,arguments))}}ne("transition",(e,{value:t,modifiers:n,expression:r},{evaluate:a})=>{typeof r=="function"&&(r=a(r)),r!==!1&&(!r||typeof r=="boolean"?Is(e,n,t):Ms(e,r,t))});function Ms(e,t,n){Vr(e,Cn,""),{enter:a=>{e._x_transition.enter.during=a},"enter-start":a=>{e._x_transition.enter.start=a},"enter-end":a=>{e._x_transition.enter.end=a},leave:a=>{e._x_transition.leave.during=a},"leave-start":a=>{e._x_transition.leave.start=a},"leave-end":a=>{e._x_transition.leave.end=a}}[n](t)}function Is(e,t,n){Vr(e,Tt);let r=!t.includes("in")&&!t.includes("out")&&!n,a=r||t.includes("in")||["enter"].includes(n),i=r||t.includes("out")||["leave"].includes(n);t.includes("in")&&!r&&(t=t.filter((E,T)=>T<t.indexOf("out"))),t.includes("out")&&!r&&(t=t.filter((E,T)=>T>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),o=s||t.includes("opacity"),l=s||t.includes("scale"),c=o?0:1,p=l?dt(t,"scale",95)/100:1,y=dt(t,"delay",0)/1e3,d=dt(t,"origin","center"),g="opacity, transform",v=dt(t,"duration",150)/1e3,x=dt(t,"duration",75)/1e3,h="cubic-bezier(0.4, 0.0, 0.2, 1)";a&&(e._x_transition.enter.during={transformOrigin:d,transitionDelay:`${y}s`,transitionProperty:g,transitionDuration:`${v}s`,transitionTimingFunction:h},e._x_transition.enter.start={opacity:c,transform:`scale(${p})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),i&&(e._x_transition.leave.during={transformOrigin:d,transitionDelay:`${y}s`,transitionProperty:g,transitionDuration:`${x}s`,transitionTimingFunction:h},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${p})`})}function Vr(e,t,n={}){e._x_transition||(e._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(r=()=>{},a=()=>{}){Mn(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,a)},out(r=()=>{},a=()=>{}){Mn(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,a)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,n,r){const a=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let i=()=>a(n);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(n):i():e._x_transition?e._x_transition.in(n):i();return}e._x_hidePromise=e._x_transition?new Promise((s,o)=>{e._x_transition.out(()=>{},()=>s(r)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let s=Jr(e);s?(s._x_hideChildren||(s._x_hideChildren=[]),s._x_hideChildren.push(e)):a(()=>{let o=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(o)]).then(([p])=>p==null?void 0:p());return delete l._x_hidePromise,delete l._x_hideChildren,c};o(e).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function Jr(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Jr(t)}function Mn(e,t,{during:n,start:r,end:a}={},i=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(r).length===0&&Object.keys(a).length===0){i(),s();return}let o,l,c;Rs(e,{start(){o=t(e,r)},during(){l=t(e,n)},before:i,end(){o(),c=t(e,a)},after:s,cleanup(){l(),c()}})}function Rs(e,t){let n,r,a,i=Tn(()=>{ee(()=>{n=!0,r||t.before(),a||(t.end(),An()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:Tn(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();i()}),finish:i},ee(()=>{t.start(),t.during()}),_s(),requestAnimationFrame(()=>{if(n)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),ee(()=>{t.before()}),r=!0,requestAnimationFrame(()=>{n||(ee(()=>{t.end()}),An(),setTimeout(e._x_transitioning.finish,s+o),a=!0)})})}function dt(e,t,n){if(e.indexOf(t)===-1)return n;const r=e[e.indexOf(t)+1];if(!r||t==="scale"&&isNaN(r))return n;if(t==="duration"||t==="delay"){let a=r.match(/([0-9]+)ms/);if(a)return a[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[r,e[e.indexOf(t)+2]].join(" "):r}var Ie=!1;function Re(e,t=()=>{}){return(...n)=>Ie?t(...n):e(...n)}function Os(e){return(...t)=>Ie&&e(...t)}var Zr=[];function Mt(e){Zr.push(e)}function Ds(e,t){Zr.forEach(n=>n(e,t)),Ie=!0,Yr(()=>{Te(t,(n,r)=>{r(n,()=>{})})}),Ie=!1}var In=!1;function Bs(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),Ie=!0,In=!0,Yr(()=>{Fs(t)}),Ie=!1,In=!1}function Fs(e){let t=!1;Te(e,(r,a)=>{je(r,(i,s)=>{if(t&&xs(i))return s();t=!0,a(i,s)})})}function Yr(e){let t=Pe;mr((n,r)=>{let a=t(n);return Ge(a),()=>{}}),e(),mr(t)}function Xr(e,t,n,r=[]){switch(e._x_bindings||(e._x_bindings=qe({})),e._x_bindings[t]=n,t=r.includes("camel")?Ws(t):t,t){case"value":Ps(e,n);break;case"style":$s(e,n);break;case"class":Ns(e,n);break;case"selected":case"checked":js(e,t,n);break;default:Qr(e,t,n);break}}function Ps(e,t){if(ra(e))e.attributes.value===void 0&&(e.value=t),window.fromModel&&(typeof t=="boolean"?e.checked=It(e.value)===t:e.checked=ea(e.value,t));else if(Rn(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(n=>ea(n,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Hs(e,t);else{if(e.value===t)return;e.value=t===void 0?"":t}}function Ns(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Cn(e,t)}function $s(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Tt(e,t)}function js(e,t,n){Qr(e,t,n),zs(e,t,n)}function Qr(e,t,n){[null,void 0,!1].includes(n)&&Us(t)?e.removeAttribute(t):(ta(t)&&(n=t),Ls(e,t,n))}function Ls(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n)}function zs(e,t,n){e[t]!==n&&(e[t]=n)}function Hs(e,t){const n=[].concat(t).map(r=>r+"");Array.from(e.options).forEach(r=>{r.selected=n.includes(r.value)})}function Ws(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function ea(e,t){return e==t}function It(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Ks=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function ta(e){return Ks.has(e)}function Us(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function qs(e,t,n){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:na(e,t,n)}function Gs(e,t,n,r=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let a=e._x_inlineBindings[t];return a.extract=r,Tr(()=>Ne(e,a.expression))}return na(e,t,n)}function na(e,t,n){let r=e.getAttribute(t);return r===null?typeof n=="function"?n():n:r===""?!0:ta(t)?!![t,"true"].includes(r):r}function Rn(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function ra(e){return e.type==="radio"||e.localName==="ui-radio"}function aa(e,t){let n;return function(){const r=this,a=arguments,i=function(){n=null,e.apply(r,a)};clearTimeout(n),n=setTimeout(i,t)}}function ia(e,t){let n;return function(){let r=this,a=arguments;n||(e.apply(r,a),n=!0,setTimeout(()=>n=!1,t))}}function sa({get:e,set:t},{get:n,set:r}){let a=!0,i,s=Pe(()=>{let o=e(),l=n();if(a)r(On(o)),a=!1;else{let c=JSON.stringify(o),p=JSON.stringify(l);c!==i?r(On(o)):c!==p&&t(On(l))}i=JSON.stringify(e()),JSON.stringify(n())});return()=>{Ge(s)}}function On(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Vs(e){(Array.isArray(e)?e:[e]).forEach(n=>n(ut))}var Le={},oa=!1;function Js(e,t){if(oa||(Le=qe(Le),oa=!0),t===void 0)return Le[e];Le[e]=t,Er(Le[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&Le[e].init()}function Zs(){return Le}var la={};function Ys(e,t){let n=typeof t!="function"?()=>t:t;return e instanceof Element?ca(e,n()):(la[e]=n,()=>{})}function Xs(e){return Object.entries(la).forEach(([t,n])=>{Object.defineProperty(e,t,{get(){return(...r)=>n(...r)}})}),e}function ca(e,t,n){let r=[];for(;r.length;)r.pop()();let a=Object.entries(t).map(([s,o])=>({name:s,value:o})),i=Rr(a);return a=a.map(s=>i.find(o=>o.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),wn(e,a,n).map(s=>{r.push(s.runCleanups),s()}),()=>{for(;r.length;)r.pop()()}}var da={};function Qs(e,t){da[e]=t}function eo(e,t){return Object.entries(da).forEach(([n,r])=>{Object.defineProperty(e,n,{get(){return(...a)=>r.bind(t)(...a)},enumerable:!1})}),e}var to={get reactive(){return qe},get release(){return Ge},get effect(){return Pe},get raw(){return fr},version:"3.15.0",flushAndStopDeferringMutations:rs,dontAutoEvaluateFunctions:Tr,disableEffectScheduling:Zi,startObservingMutations:un,stopObservingMutations:Sr,setReactivityEngine:Yi,onAttributeRemoved:br,onAttributesAdded:xr,closestDataStack:Ve,skipDuringClone:Re,onlyDuringClone:Os,addRootSelector:Kr,addInitSelector:Ur,interceptClone:Mt,addScopeToNode:it,deferMutations:ns,mapAttributes:xn,evaluateLater:ce,interceptInit:bs,setEvaluator:cs,mergeProxies:st,extractProp:Gs,findClosest:Ze,onElRemoved:ln,closestRoot:Ct,destroyTree:Ye,interceptor:Ar,transition:Mn,setStyles:Tt,mutateDom:ee,directive:ne,entangle:sa,throttle:ia,debounce:aa,evaluate:Ne,initTree:Te,nextTick:En,prefixed:Je,prefix:hs,plugin:Vs,magic:we,store:Js,start:vs,clone:Bs,cloneNode:Ds,bound:qs,$data:_r,watch:gr,walk:je,data:Qs,bind:Ys},ut=to;function no(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return a=>!!n[a]}var ro=Object.freeze({}),ao=Object.prototype.hasOwnProperty,Rt=(e,t)=>ao.call(e,t),ze=Array.isArray,pt=e=>ua(e)==="[object Map]",io=e=>typeof e=="string",Dn=e=>typeof e=="symbol",Ot=e=>e!==null&&typeof e=="object",so=Object.prototype.toString,ua=e=>so.call(e),pa=e=>ua(e).slice(8,-1),Bn=e=>io(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,oo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},lo=oo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ha=(e,t)=>e!==t&&(e===e||t===t),Fn=new WeakMap,ht=[],_e,He=Symbol("iterate"),Pn=Symbol("Map key iterate");function co(e){return e&&e._isEffect===!0}function uo(e,t=ro){co(e)&&(e=e.raw);const n=fo(e,t);return t.lazy||n(),n}function po(e){e.active&&(fa(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var ho=0;function fo(e,t){const n=function(){if(!n.active)return e();if(!ht.includes(n)){fa(n);try{return go(),ht.push(n),_e=n,e()}finally{ht.pop(),ma(),_e=ht[ht.length-1]}}};return n.id=ho++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var Xe=!0,Nn=[];function mo(){Nn.push(Xe),Xe=!1}function go(){Nn.push(Xe),Xe=!0}function ma(){const e=Nn.pop();Xe=e===void 0?!0:e}function ve(e,t,n){if(!Xe||_e===void 0)return;let r=Fn.get(e);r||Fn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=new Set),a.has(_e)||(a.add(_e),_e.deps.push(a),_e.options.onTrack&&_e.options.onTrack({effect:_e,target:e,type:t,key:n}))}function Oe(e,t,n,r,a,i){const s=Fn.get(e);if(!s)return;const o=new Set,l=p=>{p&&p.forEach(y=>{(y!==_e||y.allowRecurse)&&o.add(y)})};if(t==="clear")s.forEach(l);else if(n==="length"&&ze(e))s.forEach((p,y)=>{(y==="length"||y>=r)&&l(p)});else switch(n!==void 0&&l(s.get(n)),t){case"add":ze(e)?Bn(n)&&l(s.get("length")):(l(s.get(He)),pt(e)&&l(s.get(Pn)));break;case"delete":ze(e)||(l(s.get(He)),pt(e)&&l(s.get(Pn)));break;case"set":pt(e)&&l(s.get(He));break}const c=p=>{p.options.onTrigger&&p.options.onTrigger({effect:p,target:e,key:n,type:t,newValue:r,oldValue:a,oldTarget:i}),p.options.scheduler?p.options.scheduler(p):p()};o.forEach(c)}var yo=no("__proto__,__v_isRef,__isVue"),ga=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Dn)),wo=wa(),vo=wa(!0),ya=xo();function xo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,s=this.length;i<s;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){mo();const r=V(this)[t].apply(this,n);return ma(),r}}),e}function wa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_raw"&&i===(e?t?Bo:Aa:t?Do:Ea).get(r))return r;const s=ze(r);if(!e&&s&&Rt(ya,a))return Reflect.get(ya,a,i);const o=Reflect.get(r,a,i);return(Dn(a)?ga.has(a):yo(a))||(e||ve(r,"get",a),t)?o:Hn(o)?!s||!Bn(a)?o.value:o:Ot(o)?e?Ca(o):zn(o):o}}var bo=ko();function ko(e=!1){return function(n,r,a,i){let s=n[r];if(!e&&(a=V(a),s=V(s),!ze(n)&&Hn(s)&&!Hn(a)))return s.value=a,!0;const o=ze(n)&&Bn(r)?Number(r)<n.length:Rt(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(o?ha(a,s)&&Oe(n,"set",r,a,s):Oe(n,"add",r,a)),l}}function So(e,t){const n=Rt(e,t),r=e[t],a=Reflect.deleteProperty(e,t);return a&&n&&Oe(e,"delete",t,void 0,r),a}function _o(e,t){const n=Reflect.has(e,t);return(!Dn(t)||!ga.has(t))&&ve(e,"has",t),n}function Eo(e){return ve(e,"iterate",ze(e)?"length":He),Reflect.ownKeys(e)}var Ao={get:wo,set:bo,deleteProperty:So,has:_o,ownKeys:Eo},Co={get:vo,set(e,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},$n=e=>Ot(e)?zn(e):e,jn=e=>Ot(e)?Ca(e):e,Ln=e=>e,Dt=e=>Reflect.getPrototypeOf(e);function Bt(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);t!==i&&!n&&ve(a,"get",t),!n&&ve(a,"get",i);const{has:s}=Dt(a),o=r?Ln:n?jn:$n;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function Ft(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return e!==a&&!t&&ve(r,"has",e),!t&&ve(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function Pt(e,t=!1){return e=e.__v_raw,!t&&ve(V(e),"iterate",He),Reflect.get(e,"size",e)}function va(e){e=V(e);const t=V(this);return Dt(t).has.call(t,e)||(t.add(e),Oe(t,"add",e,e)),this}function xa(e,t){t=V(t);const n=V(this),{has:r,get:a}=Dt(n);let i=r.call(n,e);i?_a(n,r,e):(e=V(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?ha(t,s)&&Oe(n,"set",e,t,s):Oe(n,"add",e,t),this}function ba(e){const t=V(this),{has:n,get:r}=Dt(t);let a=n.call(t,e);a?_a(t,n,e):(e=V(e),a=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return a&&Oe(t,"delete",e,void 0,i),s}function ka(){const e=V(this),t=e.size!==0,n=pt(e)?new Map(e):new Set(e),r=e.clear();return t&&Oe(e,"clear",void 0,void 0,n),r}function Nt(e,t){return function(r,a){const i=this,s=i.__v_raw,o=V(s),l=t?Ln:e?jn:$n;return!e&&ve(o,"iterate",He),s.forEach((c,p)=>r.call(a,l(c),l(p),i))}}function $t(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),s=pt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),p=n?Ln:t?jn:$n;return!t&&ve(i,"iterate",l?Pn:He),{next(){const{value:y,done:d}=c.next();return d?{value:y,done:d}:{value:o?[p(y[0]),p(y[1])]:p(y),done:d}},[Symbol.iterator](){return this}}}}function De(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${lo(e)} operation ${n}failed: target is readonly.`,V(this))}return e==="delete"?!1:this}}function To(){const e={get(i){return Bt(this,i)},get size(){return Pt(this)},has:Ft,add:va,set:xa,delete:ba,clear:ka,forEach:Nt(!1,!1)},t={get(i){return Bt(this,i,!1,!0)},get size(){return Pt(this)},has:Ft,add:va,set:xa,delete:ba,clear:ka,forEach:Nt(!1,!0)},n={get(i){return Bt(this,i,!0)},get size(){return Pt(this,!0)},has(i){return Ft.call(this,i,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Nt(!0,!1)},r={get(i){return Bt(this,i,!0,!0)},get size(){return Pt(this,!0)},has(i){return Ft.call(this,i,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Nt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=$t(i,!1,!1),n[i]=$t(i,!0,!1),t[i]=$t(i,!1,!0),r[i]=$t(i,!0,!0)}),[e,n,t,r]}var[Mo,Io]=To();function Sa(e,t){const n=e?Io:Mo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Rt(n,a)&&a in r?n:r,a,i)}var Ro={get:Sa(!1)},Oo={get:Sa(!0)};function _a(e,t,n){const r=V(n);if(r!==n&&t.call(e,r)){const a=pa(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Ea=new WeakMap,Do=new WeakMap,Aa=new WeakMap,Bo=new WeakMap;function Fo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Po(e){return e.__v_skip||!Object.isExtensible(e)?0:Fo(pa(e))}function zn(e){return e&&e.__v_isReadonly?e:Ta(e,!1,Ao,Ro,Ea)}function Ca(e){return Ta(e,!0,Co,Oo,Aa)}function Ta(e,t,n,r,a){if(!Ot(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Po(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function V(e){return e&&V(e.__v_raw)||e}function Hn(e){return!!(e&&e.__v_isRef===!0)}we("nextTick",()=>En),we("dispatch",e=>ct.bind(ct,e)),we("watch",(e,{evaluateLater:t,cleanup:n})=>(r,a)=>{let i=t(r),o=gr(()=>{let l;return i(c=>l=c),l},a);n(o)}),we("store",Zs),we("data",e=>_r(e)),we("root",e=>Ct(e)),we("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=st(No(e))),e._x_refs_proxy));function No(e){let t=[];return Ze(e,n=>{n._x_refs&&t.push(n._x_refs)}),t}var Wn={};function Ma(e){return Wn[e]||(Wn[e]=0),++Wn[e]}function $o(e,t){return Ze(e,n=>{if(n._x_ids&&n._x_ids[t])return!0})}function jo(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=Ma(t))}we("id",(e,{cleanup:t})=>(n,r=null)=>{let a=`${n}${r?`-${r}`:""}`;return Lo(e,a,t,()=>{let i=$o(e,n),s=i?i._x_ids[n]:Ma(n);return r?`${n}-${s}-${r}`:`${n}-${s}`})}),Mt((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Lo(e,t,n,r){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let a=r();return e._x_id[t]=a,n(()=>{delete e._x_id[t]}),a}we("el",e=>e),Ia("Focus","focus","focus"),Ia("Persist","persist","persist");function Ia(e,t,n){we(t,r=>ge(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}ne("modelable",(e,{expression:t},{effect:n,evaluateLater:r,cleanup:a})=>{let i=r(t),s=()=>{let p;return i(y=>p=y),p},o=r(`${t} = __placeholder`),l=p=>o(()=>{},{scope:{__placeholder:p}}),c=s();l(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let p=e._x_model.get,y=e._x_model.set,d=sa({get(){return p()},set(g){y(g)}},{get(){return s()},set(g){l(g)}});a(d)})}),ne("teleport",(e,{modifiers:t,expression:n},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&ge("x-teleport can only be used on a <template> tag",e);let a=Ra(n),i=e.content.cloneNode(!0).firstElementChild;e._x_teleport=i,i._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),i.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(o=>{i.addEventListener(o,l=>{l.stopPropagation(),e.dispatchEvent(new l.constructor(l.type,l))})}),it(i,{},e);let s=(o,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(o,l):c.includes("append")?l.parentNode.insertBefore(o,l.nextSibling):l.appendChild(o)};ee(()=>{s(i,a,t),Re(()=>{Te(i)})()}),e._x_teleportPutBack=()=>{let o=Ra(n);ee(()=>{s(e._x_teleport,o,t)})},r(()=>ee(()=>{i.remove(),Ye(i)}))});var zo=document.createElement("div");function Ra(e){let t=Re(()=>document.querySelector(e),()=>zo)();return t||ge(`Cannot find x-teleport element for selector: "${e}"`),t}var Oa=()=>{};Oa.inline=(e,{modifiers:t},{cleanup:n})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,n(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})},ne("ignore",Oa),ne("effect",Re((e,{expression:t},{effect:n})=>{n(ce(e,t))}));function Kn(e,t,n,r){let a=e,i=l=>r(l),s={},o=(l,c)=>p=>c(l,p);if(n.includes("dot")&&(t=Ho(t)),n.includes("camel")&&(t=Wo(t)),n.includes("passive")&&(s.passive=!0),n.includes("capture")&&(s.capture=!0),n.includes("window")&&(a=window),n.includes("document")&&(a=document),n.includes("debounce")){let l=n[n.indexOf("debounce")+1]||"invalid-wait",c=jt(l.split("ms")[0])?Number(l.split("ms")[0]):250;i=aa(i,c)}if(n.includes("throttle")){let l=n[n.indexOf("throttle")+1]||"invalid-wait",c=jt(l.split("ms")[0])?Number(l.split("ms")[0]):250;i=ia(i,c)}return n.includes("prevent")&&(i=o(i,(l,c)=>{c.preventDefault(),l(c)})),n.includes("stop")&&(i=o(i,(l,c)=>{c.stopPropagation(),l(c)})),n.includes("once")&&(i=o(i,(l,c)=>{l(c),a.removeEventListener(t,i,s)})),(n.includes("away")||n.includes("outside"))&&(a=document,i=o(i,(l,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&l(c))})),n.includes("self")&&(i=o(i,(l,c)=>{c.target===e&&l(c)})),(Uo(t)||Da(t))&&(i=o(i,(l,c)=>{qo(c,n)||l(c)})),a.addEventListener(t,i,s),()=>{a.removeEventListener(t,i,s)}}function Ho(e){return e.replace(/-/g,".")}function Wo(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function jt(e){return!Array.isArray(e)&&!isNaN(e)}function Ko(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Uo(e){return["keydown","keyup"].includes(e)}function Da(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}function qo(e,t){let n=t.filter(i=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll"].includes(i));if(n.includes("debounce")){let i=n.indexOf("debounce");n.splice(i,jt((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let i=n.indexOf("throttle");n.splice(i,jt((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Ba(e.key).includes(n[0]))return!1;const a=["ctrl","shift","alt","meta","cmd","super"].filter(i=>n.includes(i));return n=n.filter(i=>!a.includes(i)),!(a.length>0&&a.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===a.length&&(Da(e.type)||Ba(e.key).includes(n[0])))}function Ba(e){if(!e)return[];e=Ko(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(n=>{if(t[n]===e)return n}).filter(n=>n)}ne("model",(e,{modifiers:t,expression:n},{effect:r,cleanup:a})=>{let i=e;t.includes("parent")&&(i=e.parentNode);let s=ce(i,n),o;typeof n=="string"?o=ce(i,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?o=ce(i,`${n()} = __placeholder`):o=()=>{};let l=()=>{let d;return s(g=>d=g),Fa(d)?d.get():d},c=d=>{let g;s(v=>g=v),Fa(g)?g.set(d):o(()=>{},{scope:{__placeholder:d}})};typeof n=="string"&&e.type==="radio"&&ee(()=>{e.hasAttribute("name")||e.setAttribute("name",n)});let p=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)||t.includes("lazy")?"change":"input",y=Ie?()=>{}:Kn(e,p,t,d=>{c(Un(e,t,d,l()))});if(t.includes("fill")&&([void 0,null,""].includes(l())||Rn(e)&&Array.isArray(l())||e.tagName.toLowerCase()==="select"&&e.multiple)&&c(Un(e,t,{target:e},l())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=y,a(()=>e._x_removeModelListeners.default()),e.form){let d=Kn(e.form,"reset",[],g=>{En(()=>e._x_model&&e._x_model.set(Un(e,t,{target:e},l())))});a(()=>d())}e._x_model={get(){return l()},set(d){c(d)}},e._x_forceModelUpdate=d=>{d===void 0&&typeof n=="string"&&n.match(/\./)&&(d=""),window.fromModel=!0,ee(()=>Xr(e,"value",d)),delete window.fromModel},r(()=>{let d=l();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(d)})});function Un(e,t,n,r){return ee(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(Rn(e))if(Array.isArray(r)){let a=null;return t.includes("number")?a=qn(n.target.value):t.includes("boolean")?a=It(n.target.value):a=n.target.value,n.target.checked?r.includes(a)?r:r.concat([a]):r.filter(i=>!Go(i,a))}else return n.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(a=>{let i=a.value||a.text;return qn(i)}):t.includes("boolean")?Array.from(n.target.selectedOptions).map(a=>{let i=a.value||a.text;return It(i)}):Array.from(n.target.selectedOptions).map(a=>a.value||a.text);{let a;return ra(e)?n.target.checked?a=n.target.value:a=r:a=n.target.value,t.includes("number")?qn(a):t.includes("boolean")?It(a):t.includes("trim")?a.trim():a}}})}function qn(e){let t=e?parseFloat(e):null;return Vo(t)?t:e}function Go(e,t){return e==t}function Vo(e){return!Array.isArray(e)&&!isNaN(e)}function Fa(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}ne("cloak",e=>queueMicrotask(()=>ee(()=>e.removeAttribute(Je("cloak"))))),Ur(()=>`[${Je("init")}]`),ne("init",Re((e,{expression:t},{evaluate:n})=>typeof t=="string"?!!t.trim()&&n(t,{},!1):n(t,{},!1))),ne("text",(e,{expression:t},{effect:n,evaluateLater:r})=>{let a=r(t);n(()=>{a(i=>{ee(()=>{e.textContent=i})})})}),ne("html",(e,{expression:t},{effect:n,evaluateLater:r})=>{let a=r(t);n(()=>{a(i=>{ee(()=>{e.innerHTML=i,e._x_ignoreSelf=!0,Te(e),delete e._x_ignoreSelf})})})}),xn(Br(":",Fr(Je("bind:"))));var Pa=(e,{value:t,modifiers:n,expression:r,original:a},{effect:i,cleanup:s})=>{if(!t){let l={};Xs(l),ce(e,r)(p=>{ca(e,p,a)},{scope:l});return}if(t==="key")return Jo(e,r);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let o=ce(e,r);i(()=>o(l=>{l===void 0&&typeof r=="string"&&r.match(/\./)&&(l=""),ee(()=>Xr(e,t,l,n))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};Pa.inline=(e,{value:t,modifiers:n,expression:r})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:r,extract:!1})},ne("bind",Pa);function Jo(e,t){e._x_keyExpression=t}Kr(()=>`[${Je("data")}]`),ne("data",(e,{expression:t},{cleanup:n})=>{if(Zo(e))return;t=t===""?"{}":t;let r={};mn(r,e);let a={};eo(a,r);let i=Ne(e,t,{scope:a});(i===void 0||i===!0)&&(i={}),mn(i,e);let s=qe(i);Er(s);let o=it(e,s);s.init&&Ne(e,s.init),n(()=>{s.destroy&&Ne(e,s.destroy),o()})}),Mt((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Zo(e){return Ie?In?!0:e.hasAttribute("data-has-alpine-state"):!1}ne("show",(e,{modifiers:t,expression:n},{effect:r})=>{let a=ce(e,n);e._x_doHide||(e._x_doHide=()=>{ee(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{ee(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let i=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},o=()=>setTimeout(s),l=Tn(y=>y?s():i(),y=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,y,s,i):y?o():i()}),c,p=!0;r(()=>a(y=>{!p&&y===c||(t.includes("immediate")&&(y?o():i()),l(y),c=y,p=!1)}))}),ne("for",(e,{expression:t},{effect:n,cleanup:r})=>{let a=Xo(t),i=ce(e,a.items),s=ce(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},n(()=>Yo(e,a,i,s)),r(()=>{Object.values(e._x_lookup).forEach(o=>ee(()=>{Ye(o),o.remove()})),delete e._x_prevKeys,delete e._x_lookup})});function Yo(e,t,n,r){let a=s=>typeof s=="object"&&!Array.isArray(s),i=e;n(s=>{Qo(s)&&s>=0&&(s=Array.from(Array(s).keys(),h=>h+1)),s===void 0&&(s=[]);let o=e._x_lookup,l=e._x_prevKeys,c=[],p=[];if(a(s))s=Object.entries(s).map(([h,E])=>{let T=Na(t,E,h,s);r(O=>{p.includes(O)&&ge("Duplicate key on x-for",e),p.push(O)},{scope:{index:h,...T}}),c.push(T)});else for(let h=0;h<s.length;h++){let E=Na(t,s[h],h,s);r(T=>{p.includes(T)&&ge("Duplicate key on x-for",e),p.push(T)},{scope:{index:h,...E}}),c.push(E)}let y=[],d=[],g=[],v=[];for(let h=0;h<l.length;h++){let E=l[h];p.indexOf(E)===-1&&g.push(E)}l=l.filter(h=>!g.includes(h));let x="template";for(let h=0;h<p.length;h++){let E=p[h],T=l.indexOf(E);if(T===-1)l.splice(h,0,E),y.push([x,h]);else if(T!==h){let O=l.splice(h,1)[0],N=l.splice(T-1,1)[0];l.splice(h,0,N),l.splice(T,0,O),d.push([O,N])}else v.push(E);x=E}for(let h=0;h<g.length;h++){let E=g[h];E in o&&(ee(()=>{Ye(o[E]),o[E].remove()}),delete o[E])}for(let h=0;h<d.length;h++){let[E,T]=d[h],O=o[E],N=o[T],M=document.createElement("div");ee(()=>{N||ge('x-for ":key" is undefined or invalid',i,T,o),N.after(M),O.after(N),N._x_currentIfEl&&N.after(N._x_currentIfEl),M.before(O),O._x_currentIfEl&&O.after(O._x_currentIfEl),M.remove()}),N._x_refreshXForScope(c[p.indexOf(T)])}for(let h=0;h<y.length;h++){let[E,T]=y[h],O=E==="template"?i:o[E];O._x_currentIfEl&&(O=O._x_currentIfEl);let N=c[T],M=p[T],re=document.importNode(i.content,!0).firstElementChild,X=qe(N);it(re,X,i),re._x_refreshXForScope=ie=>{Object.entries(ie).forEach(([pe,m])=>{X[pe]=m})},ee(()=>{O.after(re),Re(()=>Te(re))()}),typeof M=="object"&&ge("x-for key cannot be an object, it must be a string or an integer",i),o[M]=re}for(let h=0;h<v.length;h++)o[v[h]]._x_refreshXForScope(c[p.indexOf(v[h])]);i._x_prevKeys=p})}function Xo(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,a=e.match(r);if(!a)return;let i={};i.items=a[2].trim();let s=a[1].replace(n,"").trim(),o=s.match(t);return o?(i.item=s.replace(t,"").trim(),i.index=o[1].trim(),o[2]&&(i.collection=o[2].trim())):i.item=s,i}function Na(e,t,n,r){let a={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,o)=>{a[s]=t[o]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{a[s]=t[s]}):a[e.item]=t,e.index&&(a[e.index]=n),e.collection&&(a[e.collection]=r),a}function Qo(e){return!Array.isArray(e)&&!isNaN(e)}function $a(){}$a.inline=(e,{expression:t},{cleanup:n})=>{let r=Ct(e);r._x_refs||(r._x_refs={}),r._x_refs[t]=e,n(()=>delete r._x_refs[t])},ne("ref",$a),ne("if",(e,{expression:t},{effect:n,cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&ge("x-if can only be used on a <template> tag",e);let a=ce(e,t),i=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let o=e.content.cloneNode(!0).firstElementChild;return it(o,{},e),ee(()=>{e.after(o),Re(()=>Te(o))()}),e._x_currentIfEl=o,e._x_undoIf=()=>{ee(()=>{Ye(o),o.remove()}),delete e._x_currentIfEl},o},s=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};n(()=>a(o=>{o?i():s()})),r(()=>e._x_undoIf&&e._x_undoIf())}),ne("id",(e,{expression:t},{evaluate:n})=>{n(t).forEach(a=>jo(e,a))}),Mt((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)}),xn(Br("@",Fr(Je("on:")))),ne("on",Re((e,{value:t,modifiers:n,expression:r},{cleanup:a})=>{let i=r?ce(e,r):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=Kn(e,t,n,o=>{i(()=>{},{scope:{$event:o},params:[o]})});a(()=>s())})),Lt("Collapse","collapse","collapse"),Lt("Intersect","intersect","intersect"),Lt("Focus","trap","focus"),Lt("Mask","mask","mask");function Lt(e,t,n){ne(t,r=>ge(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}ut.setEvaluator(Ir),ut.setReactivityEngine({reactive:zn,effect:uo,release:po,raw:V});var el=ut,xe=el;function zt(e){"@babel/helpers - typeof";return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zt(e)}var tl=/^\s+/,nl=/\s+$/;function C(e,t){if(e=e||"",t=t||{},e instanceof C)return e;if(!(this instanceof C))return new C(e,t);var n=rl(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}C.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),n,r,a,i,s,o;return n=t.r/255,r=t.g/255,a=t.b/255,n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*i+.7152*s+.0722*o},setAlpha:function(t){return this._a=Ka(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=La(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=La(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.v*100);return this._a==1?"hsv("+n+", "+r+"%, "+a+"%)":"hsva("+n+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=ja(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=ja(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.l*100);return this._a==1?"hsl("+n+", "+r+"%, "+a+"%)":"hsla("+n+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return za(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return ol(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(Y(this._r,255)*100)+"%",g:Math.round(Y(this._g,255)*100)+"%",b:Math.round(Y(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(Y(this._r,255)*100)+"%, "+Math.round(Y(this._g,255)*100)+"%, "+Math.round(Y(this._b,255)*100)+"%)":"rgba("+Math.round(Y(this._r,255)*100)+"%, "+Math.round(Y(this._g,255)*100)+"%, "+Math.round(Y(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:vl[za(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var n="#"+Ha(this._r,this._g,this._b,this._a),r=n,a=this._gradientType?"GradientType = 1, ":"";if(t){var i=C(t);r="#"+Ha(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var n=!!t;t=t||this._format;var r=!1,a=this._a<1&&this._a>=0,i=!n&&a&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return i?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return C(this.toString())},_applyModification:function(t,n){var r=t.apply(null,[this].concat([].slice.call(n)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(ul,arguments)},brighten:function(){return this._applyModification(pl,arguments)},darken:function(){return this._applyModification(hl,arguments)},desaturate:function(){return this._applyModification(ll,arguments)},saturate:function(){return this._applyModification(cl,arguments)},greyscale:function(){return this._applyModification(dl,arguments)},spin:function(){return this._applyModification(fl,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(yl,arguments)},complement:function(){return this._applyCombination(ml,arguments)},monochromatic:function(){return this._applyCombination(wl,arguments)},splitcomplement:function(){return this._applyCombination(gl,arguments)},triad:function(){return this._applyCombination(Wa,[3])},tetrad:function(){return this._applyCombination(Wa,[4])}},C.fromRatio=function(e,t){if(zt(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?n[r]=e[r]:n[r]=ft(e[r]));e=n}return C(e,t)};function rl(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,i=null,s=!1,o=!1;return typeof e=="string"&&(e=Sl(e)),zt(e)=="object"&&(Me(e.r)&&Me(e.g)&&Me(e.b)?(t=al(e.r,e.g,e.b),s=!0,o=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Me(e.h)&&Me(e.s)&&Me(e.v)?(r=ft(e.s),a=ft(e.v),t=sl(e.h,r,a),s=!0,o="hsv"):Me(e.h)&&Me(e.s)&&Me(e.l)&&(r=ft(e.s),i=ft(e.l),t=il(e.h,r,i),s=!0,o="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=Ka(n),{ok:s,format:e.format||o,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}function al(e,t,n){return{r:Y(e,255)*255,g:Y(t,255)*255,b:Y(n,255)*255}}function ja(e,t,n){e=Y(e,255),t=Y(t,255),n=Y(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),i,s,o=(r+a)/2;if(r==a)i=s=0;else{var l=r-a;switch(s=o>.5?l/(2-r-a):l/(r+a),r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s,l:o}}function il(e,t,n){var r,a,i;e=Y(e,360),t=Y(t,100),n=Y(n,100);function s(c,p,y){return y<0&&(y+=1),y>1&&(y-=1),y<.16666666666666666?c+(p-c)*6*y:y<.5?p:y<.6666666666666666?c+(p-c)*(.6666666666666666-y)*6:c}if(t===0)r=a=i=n;else{var o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;r=s(l,o,e+.3333333333333333),a=s(l,o,e),i=s(l,o,e-.3333333333333333)}return{r:r*255,g:a*255,b:i*255}}function La(e,t,n){e=Y(e,255),t=Y(t,255),n=Y(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),i,s,o=r,l=r-a;if(s=r===0?0:l/r,r==a)i=0;else{switch(r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s,v:o}}function sl(e,t,n){e=Y(e,360)*6,t=Y(t,100),n=Y(n,100);var r=Math.floor(e),a=e-r,i=n*(1-t),s=n*(1-a*t),o=n*(1-(1-a)*t),l=r%6,c=[n,s,i,i,o,n][l],p=[o,n,n,s,i,i][l],y=[i,i,o,n,n,s][l];return{r:c*255,g:p*255,b:y*255}}function za(e,t,n,r){var a=[be(Math.round(e).toString(16)),be(Math.round(t).toString(16)),be(Math.round(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function ol(e,t,n,r,a){var i=[be(Math.round(e).toString(16)),be(Math.round(t).toString(16)),be(Math.round(n).toString(16)),be(Ua(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Ha(e,t,n,r){var a=[be(Ua(r)),be(Math.round(e).toString(16)),be(Math.round(t).toString(16)),be(Math.round(n).toString(16))];return a.join("")}C.equals=function(e,t){return!e||!t?!1:C(e).toRgbString()==C(t).toRgbString()},C.random=function(){return C.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function ll(e,t){t=t===0?0:t||10;var n=C(e).toHsl();return n.s-=t/100,n.s=Ht(n.s),C(n)}function cl(e,t){t=t===0?0:t||10;var n=C(e).toHsl();return n.s+=t/100,n.s=Ht(n.s),C(n)}function dl(e){return C(e).desaturate(100)}function ul(e,t){t=t===0?0:t||10;var n=C(e).toHsl();return n.l+=t/100,n.l=Ht(n.l),C(n)}function pl(e,t){t=t===0?0:t||10;var n=C(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),C(n)}function hl(e,t){t=t===0?0:t||10;var n=C(e).toHsl();return n.l-=t/100,n.l=Ht(n.l),C(n)}function fl(e,t){var n=C(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,C(n)}function ml(e){var t=C(e).toHsl();return t.h=(t.h+180)%360,C(t)}function Wa(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=C(e).toHsl(),r=[C(e)],a=360/t,i=1;i<t;i++)r.push(C({h:(n.h+i*a)%360,s:n.s,l:n.l}));return r}function gl(e){var t=C(e).toHsl(),n=t.h;return[C(e),C({h:(n+72)%360,s:t.s,l:t.l}),C({h:(n+216)%360,s:t.s,l:t.l})]}function yl(e,t,n){t=t||6,n=n||30;var r=C(e).toHsl(),a=360/n,i=[C(e)];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,i.push(C(r));return i}function wl(e,t){t=t||6;for(var n=C(e).toHsv(),r=n.h,a=n.s,i=n.v,s=[],o=1/t;t--;)s.push(C({h:r,s:a,v:i})),i=(i+o)%1;return s}C.mix=function(e,t,n){n=n===0?0:n||50;var r=C(e).toRgb(),a=C(t).toRgb(),i=n/100,s={r:(a.r-r.r)*i+r.r,g:(a.g-r.g)*i+r.g,b:(a.b-r.b)*i+r.b,a:(a.a-r.a)*i+r.a};return C(s)},C.readability=function(e,t){var n=C(e),r=C(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},C.isReadable=function(e,t,n){var r=C.readability(e,t),a,i;switch(i=!1,a=_l(n),a.level+a.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i},C.mostReadable=function(e,t,n){var r=null,a=0,i,s,o,l;n=n||{},s=n.includeFallbackColors,o=n.level,l=n.size;for(var c=0;c<t.length;c++)i=C.readability(e,t[c]),i>a&&(a=i,r=C(t[c]));return C.isReadable(e,r,{level:o,size:l})||!s?r:(n.includeFallbackColors=!1,C.mostReadable(e,["#fff","#000"],n))};var Gn=C.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},vl=C.hexNames=xl(Gn);function xl(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function Ka(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Y(e,t){bl(e)&&(e="100%");var n=kl(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Ht(e){return Math.min(1,Math.max(0,e))}function fe(e){return parseInt(e,16)}function bl(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function kl(e){return typeof e=="string"&&e.indexOf("%")!=-1}function be(e){return e.length==1?"0"+e:""+e}function ft(e){return e<=1&&(e=e*100+"%"),e}function Ua(e){return Math.round(parseFloat(e)*255).toString(16)}function qa(e){return fe(e)/255}var ke=(function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",a="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}})();function Me(e){return!!ke.CSS_UNIT.exec(e)}function Sl(e){e=e.replace(tl,"").replace(nl,"").toLowerCase();var t=!1;if(Gn[e])e=Gn[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=ke.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=ke.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ke.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=ke.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ke.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=ke.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ke.hex8.exec(e))?{r:fe(n[1]),g:fe(n[2]),b:fe(n[3]),a:qa(n[4]),format:t?"name":"hex8"}:(n=ke.hex6.exec(e))?{r:fe(n[1]),g:fe(n[2]),b:fe(n[3]),format:t?"name":"hex"}:(n=ke.hex4.exec(e))?{r:fe(n[1]+""+n[1]),g:fe(n[2]+""+n[2]),b:fe(n[3]+""+n[3]),a:qa(n[4]+""+n[4]),format:t?"name":"hex8"}:(n=ke.hex3.exec(e))?{r:fe(n[1]+""+n[1]),g:fe(n[2]+""+n[2]),b:fe(n[3]+""+n[3]),format:t?"name":"hex"}:!1}function _l(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:t,size:n}}function Ga(e,t){return function(){return e.apply(t,arguments)}}const{toString:El}=Object.prototype,{getPrototypeOf:Vn}=Object,{iterator:Wt,toStringTag:Va}=Symbol,Kt=(e=>t=>{const n=El.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Se=e=>(e=e.toLowerCase(),t=>Kt(t)===e),Ut=e=>t=>typeof t===e,{isArray:Qe}=Array,et=Ut("undefined");function mt(e){return e!==null&&!et(e)&&e.constructor!==null&&!et(e.constructor)&&de(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ja=Se("ArrayBuffer");function Al(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ja(e.buffer),t}const Cl=Ut("string"),de=Ut("function"),Za=Ut("number"),gt=e=>e!==null&&typeof e=="object",Tl=e=>e===!0||e===!1,qt=e=>{if(Kt(e)!=="object")return!1;const t=Vn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Va in e)&&!(Wt in e)},Ml=e=>{if(!gt(e)||mt(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Il=Se("Date"),Rl=Se("File"),Ol=Se("Blob"),Dl=Se("FileList"),Bl=e=>gt(e)&&de(e.pipe),Fl=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||de(e.append)&&((t=Kt(e))==="formdata"||t==="object"&&de(e.toString)&&e.toString()==="[object FormData]"))},Pl=Se("URLSearchParams"),[Nl,$l,jl,Ll]=["ReadableStream","Request","Response","Headers"].map(Se),zl=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yt(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),Qe(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{if(mt(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function Ya(e,t){if(mt(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const We=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xa=e=>!et(e)&&e!==We;function Jn(){const{caseless:e,skipUndefined:t}=Xa(this)&&this||{},n={},r=(a,i)=>{const s=e&&Ya(n,i)||i;qt(n[s])&&qt(a)?n[s]=Jn(n[s],a):qt(a)?n[s]=Jn({},a):Qe(a)?n[s]=a.slice():(!t||!et(a))&&(n[s]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&yt(arguments[a],r);return n}const Hl=(e,t,n,{allOwnKeys:r}={})=>(yt(t,(a,i)=>{n&&de(a)?e[i]=Ga(a,n):e[i]=a},{allOwnKeys:r}),e),Wl=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kl=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ul=(e,t,n,r)=>{let a,i,s;const o={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)s=a[i],(!r||r(s,e,t))&&!o[s]&&(t[s]=e[s],o[s]=!0);e=n!==!1&&Vn(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ql=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Gl=e=>{if(!e)return null;if(Qe(e))return e;let t=e.length;if(!Za(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Vl=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Vn(Uint8Array)),Jl=(e,t)=>{const r=(e&&e[Wt]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;t.call(e,i[0],i[1])}},Zl=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Yl=Se("HTMLFormElement"),Xl=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),Qa=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ql=Se("RegExp"),ei=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};yt(n,(a,i)=>{let s;(s=t(a,i,e))!==!1&&(r[i]=s||a)}),Object.defineProperties(e,r)},ec=e=>{ei(e,(t,n)=>{if(de(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(de(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},tc=(e,t)=>{const n={},r=a=>{a.forEach(i=>{n[i]=!0})};return Qe(e)?r(e):r(String(e).split(t)),n},nc=()=>{},rc=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ac(e){return!!(e&&de(e.append)&&e[Va]==="FormData"&&e[Wt])}const ic=e=>{const t=new Array(10),n=(r,a)=>{if(gt(r)){if(t.indexOf(r)>=0)return;if(mt(r))return r;if(!("toJSON"in r)){t[a]=r;const i=Qe(r)?[]:{};return yt(r,(s,o)=>{const l=n(s,a+1);!et(l)&&(i[o]=l)}),t[a]=void 0,i}}return r};return n(e,0)},sc=Se("AsyncFunction"),oc=e=>e&&(gt(e)||de(e))&&de(e.then)&&de(e.catch),ti=((e,t)=>e?setImmediate:t?((n,r)=>(We.addEventListener("message",({source:a,data:i})=>{a===We&&i===n&&r.length&&r.shift()()},!1),a=>{r.push(a),We.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",de(We.postMessage)),lc=typeof queueMicrotask<"u"?queueMicrotask.bind(We):typeof process<"u"&&process.nextTick||ti,w={isArray:Qe,isArrayBuffer:Ja,isBuffer:mt,isFormData:Fl,isArrayBufferView:Al,isString:Cl,isNumber:Za,isBoolean:Tl,isObject:gt,isPlainObject:qt,isEmptyObject:Ml,isReadableStream:Nl,isRequest:$l,isResponse:jl,isHeaders:Ll,isUndefined:et,isDate:Il,isFile:Rl,isBlob:Ol,isRegExp:Ql,isFunction:de,isStream:Bl,isURLSearchParams:Pl,isTypedArray:Vl,isFileList:Dl,forEach:yt,merge:Jn,extend:Hl,trim:zl,stripBOM:Wl,inherits:Kl,toFlatObject:Ul,kindOf:Kt,kindOfTest:Se,endsWith:ql,toArray:Gl,forEachEntry:Jl,matchAll:Zl,isHTMLForm:Yl,hasOwnProperty:Qa,hasOwnProp:Qa,reduceDescriptors:ei,freezeMethods:ec,toObjectSet:tc,toCamelCase:Xl,noop:nc,toFiniteNumber:rc,findKey:Ya,global:We,isContextDefined:Xa,isSpecCompliantForm:ac,toJSONObject:ic,isAsyncFn:sc,isThenable:oc,setImmediate:ti,asap:lc,isIterable:e=>e!=null&&de(e[Wt])};function P(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a,this.status=a.status?a.status:null)}w.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.status}}});const ni=P.prototype,ri={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ri[e]={value:e}}),Object.defineProperties(P,ri),Object.defineProperty(ni,"isAxiosError",{value:!0}),P.from=(e,t,n,r,a,i)=>{const s=Object.create(ni);w.toFlatObject(e,s,function(p){return p!==Error.prototype},c=>c!=="isAxiosError");const o=e&&e.message?e.message:"Error",l=t==null&&e?e.code:t;return P.call(s,o,l,n,r,a),e&&s.cause==null&&Object.defineProperty(s,"cause",{value:e,configurable:!0}),s.name=e&&e.name||"Error",i&&Object.assign(s,i),s};const cc=null;function Zn(e){return w.isPlainObject(e)||w.isArray(e)}function ai(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function ii(e,t,n){return e?e.concat(t).map(function(a,i){return a=ai(a),!n&&i?"["+a+"]":a}).join(n?".":""):t}function dc(e){return w.isArray(e)&&!e.some(Zn)}const uc=w.toFlatObject(w,{},null,function(t){return/^is[A-Z]/.test(t)});function Gt(e,t,n){if(!w.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,h){return!w.isUndefined(h[x])});const r=n.metaTokens,a=n.visitor||p,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(t);if(!w.isFunction(a))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(w.isDate(v))return v.toISOString();if(w.isBoolean(v))return v.toString();if(!l&&w.isBlob(v))throw new P("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(v)||w.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function p(v,x,h){let E=v;if(v&&!h&&typeof v=="object"){if(w.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(w.isArray(v)&&dc(v)||(w.isFileList(v)||w.endsWith(x,"[]"))&&(E=w.toArray(v)))return x=ai(x),E.forEach(function(O,N){!(w.isUndefined(O)||O===null)&&t.append(s===!0?ii([x],N,i):s===null?x:x+"[]",c(O))}),!1}return Zn(v)?!0:(t.append(ii(h,x,i),c(v)),!1)}const y=[],d=Object.assign(uc,{defaultVisitor:p,convertValue:c,isVisitable:Zn});function g(v,x){if(!w.isUndefined(v)){if(y.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));y.push(v),w.forEach(v,function(E,T){(!(w.isUndefined(E)||E===null)&&a.call(t,E,w.isString(T)?T.trim():T,x,d))===!0&&g(E,x?x.concat(T):[T])}),y.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return g(e),t}function si(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Yn(e,t){this._pairs=[],e&&Gt(e,this,t)}const oi=Yn.prototype;oi.append=function(t,n){this._pairs.push([t,n])},oi.toString=function(t){const n=t?function(r){return t.call(this,r,si)}:si;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function pc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function li(e,t,n){if(!t)return e;const r=n&&n.encode||pc;w.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let i;if(a?i=a(t,n):i=w.isURLSearchParams(t)?t.toString():new Yn(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ci{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(r){r!==null&&t(r)})}}const di={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hc={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:Yn,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},Xn=typeof window<"u"&&typeof document<"u",Qn=typeof navigator=="object"&&navigator||void 0,fc=Xn&&(!Qn||["ReactNative","NativeScript","NS"].indexOf(Qn.product)<0),mc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",gc=Xn&&window.location.href||"http://localhost",oe={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xn,hasStandardBrowserEnv:fc,hasStandardBrowserWebWorkerEnv:mc,navigator:Qn,origin:gc},Symbol.toStringTag,{value:"Module"})),...hc};function yc(e,t){return Gt(e,new oe.classes.URLSearchParams,{visitor:function(n,r,a,i){return oe.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function wc(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function vc(e){const t={},n=Object.keys(e);let r;const a=n.length;let i;for(r=0;r<a;r++)i=n[r],t[i]=e[i];return t}function ui(e){function t(n,r,a,i){let s=n[i++];if(s==="__proto__")return!0;const o=Number.isFinite(+s),l=i>=n.length;return s=!s&&w.isArray(a)?a.length:s,l?(w.hasOwnProp(a,s)?a[s]=[a[s],r]:a[s]=r,!o):((!a[s]||!w.isObject(a[s]))&&(a[s]=[]),t(n,r,a[s],i)&&w.isArray(a[s])&&(a[s]=vc(a[s])),!o)}if(w.isFormData(e)&&w.isFunction(e.entries)){const n={};return w.forEachEntry(e,(r,a)=>{t(wc(r),a,n,0)}),n}return null}function xc(e,t,n){if(w.isString(e))try{return(t||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const wt={transitional:di,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,i=w.isObject(t);if(i&&w.isHTMLForm(t)&&(t=new FormData(t)),w.isFormData(t))return a?JSON.stringify(ui(t)):t;if(w.isArrayBuffer(t)||w.isBuffer(t)||w.isStream(t)||w.isFile(t)||w.isBlob(t)||w.isReadableStream(t))return t;if(w.isArrayBufferView(t))return t.buffer;if(w.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yc(t,this.formSerializer).toString();if((o=w.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Gt(o?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),xc(t)):t}],transformResponse:[function(t){const n=this.transitional||wt.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(w.isResponse(t)||w.isReadableStream(t))return t;if(t&&w.isString(t)&&(r&&!this.responseType||a)){const s=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(o){if(s)throw o.name==="SyntaxError"?P.from(o,P.ERR_BAD_RESPONSE,this,null,this.response):o}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oe.classes.FormData,Blob:oe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{wt.headers[e]={}});const bc=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kc=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(s){a=s.indexOf(":"),n=s.substring(0,a).trim().toLowerCase(),r=s.substring(a+1).trim(),!(!n||t[n]&&bc[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pi=Symbol("internals");function vt(e){return e&&String(e).trim().toLowerCase()}function Vt(e){return e===!1||e==null?e:w.isArray(e)?e.map(Vt):String(e)}function Sc(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _c=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function er(e,t,n,r,a){if(w.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!w.isString(t)){if(w.isString(r))return t.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(t)}}function Ec(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ac(e,t){const n=w.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,i,s){return this[r].call(this,t,a,i,s)},configurable:!0})})}let ue=class{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function i(o,l,c){const p=vt(l);if(!p)throw new Error("header name must be a non-empty string");const y=w.findKey(a,p);(!y||a[y]===void 0||c===!0||c===void 0&&a[y]!==!1)&&(a[y||l]=Vt(o))}const s=(o,l)=>w.forEach(o,(c,p)=>i(c,p,l));if(w.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(w.isString(t)&&(t=t.trim())&&!_c(t))s(kc(t),n);else if(w.isObject(t)&&w.isIterable(t)){let o={},l,c;for(const p of t){if(!w.isArray(p))throw TypeError("Object iterator must return a key-value pair");o[c=p[0]]=(l=o[c])?w.isArray(l)?[...l,p[1]]:[l,p[1]]:p[1]}s(o,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=vt(t),t){const r=w.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return Sc(a);if(w.isFunction(n))return n.call(this,a,r);if(w.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=vt(t),t){const r=w.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||er(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function i(s){if(s=vt(s),s){const o=w.findKey(r,s);o&&(!n||er(r,r[o],o,n))&&(delete r[o],a=!0)}}return w.isArray(t)?t.forEach(i):i(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const i=n[r];(!t||er(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const n=this,r={};return w.forEach(this,(a,i)=>{const s=w.findKey(r,i);if(s){n[s]=Vt(a),delete n[i];return}const o=t?Ec(i):String(i).trim();o!==i&&delete n[i],n[o]=Vt(a),r[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return w.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[pi]=this[pi]={accessors:{}}).accessors,a=this.prototype;function i(s){const o=vt(s);r[o]||(Ac(a,s),r[o]=!0)}return w.isArray(t)?t.forEach(i):i(t),this}};ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),w.reduceDescriptors(ue.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}}),w.freezeMethods(ue);function tr(e,t){const n=this||wt,r=t||n,a=ue.from(r.headers);let i=r.data;return w.forEach(e,function(o){i=o.call(n,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function hi(e){return!!(e&&e.__CANCEL__)}function tt(e,t,n){P.call(this,e??"canceled",P.ERR_CANCELED,t,n),this.name="CanceledError"}w.inherits(tt,P,{__CANCEL__:!0});function fi(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new P("Request failed with status code "+n.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Cc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Tc(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),p=r[i];s||(s=c),n[a]=l,r[a]=c;let y=i,d=0;for(;y!==a;)d+=n[y++],y=y%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),c-s<t)return;const g=p&&c-p;return g?Math.round(d*1e3/g):void 0}}function Mc(e,t){let n=0,r=1e3/t,a,i;const s=(c,p=Date.now())=>{n=p,a=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const p=Date.now(),y=p-n;y>=r?s(c,p):(a=c,i||(i=setTimeout(()=>{i=null,s(a)},r-y)))},()=>a&&s(a)]}const Jt=(e,t,n=3)=>{let r=0;const a=Tc(50,250);return Mc(i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-r,c=a(l),p=s<=o;r=s;const y={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:c||void 0,estimated:c&&o&&p?(o-s)/c:void 0,event:i,lengthComputable:o!=null,[t?"download":"upload"]:!0};e(y)},n)},mi=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},gi=e=>(...t)=>w.asap(()=>e(...t)),Ic=oe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,oe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(oe.origin),oe.navigator&&/(msie|trident)/i.test(oe.navigator.userAgent)):()=>!0,Rc=oe.hasStandardBrowserEnv?{write(e,t,n,r,a,i){const s=[e+"="+encodeURIComponent(t)];w.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),w.isString(r)&&s.push("path="+r),w.isString(a)&&s.push("domain="+a),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Oc(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Dc(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function yi(e,t,n){let r=!Oc(t);return e&&(r||n==!1)?Dc(e,t):t}const wi=e=>e instanceof ue?{...e}:e;function Ke(e,t){t=t||{};const n={};function r(c,p,y,d){return w.isPlainObject(c)&&w.isPlainObject(p)?w.merge.call({caseless:d},c,p):w.isPlainObject(p)?w.merge({},p):w.isArray(p)?p.slice():p}function a(c,p,y,d){if(w.isUndefined(p)){if(!w.isUndefined(c))return r(void 0,c,y,d)}else return r(c,p,y,d)}function i(c,p){if(!w.isUndefined(p))return r(void 0,p)}function s(c,p){if(w.isUndefined(p)){if(!w.isUndefined(c))return r(void 0,c)}else return r(void 0,p)}function o(c,p,y){if(y in t)return r(c,p);if(y in e)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:o,headers:(c,p,y)=>a(wi(c),wi(p),y,!0)};return w.forEach(Object.keys({...e,...t}),function(p){const y=l[p]||a,d=y(e[p],t[p],p);w.isUndefined(d)&&y!==o||(n[p]=d)}),n}const vi=e=>{const t=Ke({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:i,headers:s,auth:o}=t;if(t.headers=s=ue.from(s),t.url=li(yi(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),o&&s.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),w.isFormData(n)){if(oe.hasStandardBrowserEnv||oe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(w.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([p,y])=>{c.includes(p.toLowerCase())&&s.set(p,y)})}}if(oe.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(t)),r||r!==!1&&Ic(t.url))){const l=a&&i&&Rc.read(i);l&&s.set(a,l)}return t},Bc=typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(n,r){const a=vi(e);let i=a.data;const s=ue.from(a.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=a,p,y,d,g,v;function x(){g&&g(),v&&v(),a.cancelToken&&a.cancelToken.unsubscribe(p),a.signal&&a.signal.removeEventListener("abort",p)}let h=new XMLHttpRequest;h.open(a.method.toUpperCase(),a.url,!0),h.timeout=a.timeout;function E(){if(!h)return;const O=ue.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),M={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:O,config:e,request:h};fi(function(X){n(X),x()},function(X){r(X),x()},M),h=null}"onloadend"in h?h.onloadend=E:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(E)},h.onabort=function(){h&&(r(new P("Request aborted",P.ECONNABORTED,e,h)),h=null)},h.onerror=function(N){const M=N&&N.message?N.message:"Network Error",re=new P(M,P.ERR_NETWORK,e,h);re.event=N||null,r(re),h=null},h.ontimeout=function(){let N=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const M=a.transitional||di;a.timeoutErrorMessage&&(N=a.timeoutErrorMessage),r(new P(N,M.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,h)),h=null},i===void 0&&s.setContentType(null),"setRequestHeader"in h&&w.forEach(s.toJSON(),function(N,M){h.setRequestHeader(M,N)}),w.isUndefined(a.withCredentials)||(h.withCredentials=!!a.withCredentials),o&&o!=="json"&&(h.responseType=a.responseType),c&&([d,v]=Jt(c,!0),h.addEventListener("progress",d)),l&&h.upload&&([y,g]=Jt(l),h.upload.addEventListener("progress",y),h.upload.addEventListener("loadend",g)),(a.cancelToken||a.signal)&&(p=O=>{h&&(r(!O||O.type?new tt(null,e,h):O),h.abort(),h=null)},a.cancelToken&&a.cancelToken.subscribe(p),a.signal&&(a.signal.aborted?p():a.signal.addEventListener("abort",p)));const T=Cc(a.url);if(T&&oe.protocols.indexOf(T)===-1){r(new P("Unsupported protocol "+T+":",P.ERR_BAD_REQUEST,e));return}h.send(i||null)})},Fc=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,a;const i=function(c){if(!a){a=!0,o();const p=c instanceof Error?c:this.reason;r.abort(p instanceof P?p:new tt(p instanceof Error?p.message:p))}};let s=t&&setTimeout(()=>{s=null,i(new P(`timeout ${t} of ms exceeded`,P.ETIMEDOUT))},t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>w.asap(o),l}},Pc=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,a;for(;r<n;)a=r+t,yield e.slice(r,a),r=a},Nc=async function*(e,t){for await(const n of $c(e))yield*Pc(n,t)},$c=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},xi=(e,t,n,r)=>{const a=Nc(e,t);let i=0,s,o=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:p}=await a.next();if(c){o(),l.close();return}let y=p.byteLength;if(n){let d=i+=y;n(d)}l.enqueue(new Uint8Array(p))}catch(c){throw o(c),c}},cancel(l){return o(l),a.return()}},{highWaterMark:2})},bi=64*1024,{isFunction:Zt}=w,jc=(({Request:e,Response:t})=>({Request:e,Response:t}))(w.global),{ReadableStream:ki,TextEncoder:Si}=w.global,_i=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Lc=e=>{e=w.merge.call({skipUndefined:!0},jc,e);const{fetch:t,Request:n,Response:r}=e,a=t?Zt(t):typeof fetch=="function",i=Zt(n),s=Zt(r);if(!a)return!1;const o=a&&Zt(ki),l=a&&(typeof Si=="function"?(v=>x=>v.encode(x))(new Si):async v=>new Uint8Array(await new n(v).arrayBuffer())),c=i&&o&&_i(()=>{let v=!1;const x=new n(oe.origin,{body:new ki,method:"POST",get duplex(){return v=!0,"half"}}).headers.has("Content-Type");return v&&!x}),p=s&&o&&_i(()=>w.isReadableStream(new r("").body)),y={stream:p&&(v=>v.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(v=>{!y[v]&&(y[v]=(x,h)=>{let E=x&&x[v];if(E)return E.call(x);throw new P(`Response type '${v}' is not supported`,P.ERR_NOT_SUPPORT,h)})});const d=async v=>{if(v==null)return 0;if(w.isBlob(v))return v.size;if(w.isSpecCompliantForm(v))return(await new n(oe.origin,{method:"POST",body:v}).arrayBuffer()).byteLength;if(w.isArrayBufferView(v)||w.isArrayBuffer(v))return v.byteLength;if(w.isURLSearchParams(v)&&(v=v+""),w.isString(v))return(await l(v)).byteLength},g=async(v,x)=>{const h=w.toFiniteNumber(v.getContentLength());return h??d(x)};return async v=>{let{url:x,method:h,data:E,signal:T,cancelToken:O,timeout:N,onDownloadProgress:M,onUploadProgress:re,responseType:X,headers:ie,withCredentials:pe="same-origin",fetchOptions:m}=vi(v),k=t||fetch;X=X?(X+"").toLowerCase():"text";let _=Fc([T,O&&O.toAbortSignal()],N),S=null;const B=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let L;try{if(re&&c&&h!=="get"&&h!=="head"&&(L=await g(ie,E))!==0){let u=new n(x,{method:"POST",body:E,duplex:"half"}),A;if(w.isFormData(E)&&(A=u.headers.get("content-type"))&&ie.setContentType(A),u.body){const[I,D]=mi(L,Jt(gi(re)));E=xi(u.body,bi,I,D)}}w.isString(pe)||(pe=pe?"include":"omit");const W=i&&"credentials"in n.prototype,Q={...m,signal:_,method:h.toUpperCase(),headers:ie.normalize().toJSON(),body:E,duplex:"half",credentials:W?pe:void 0};S=i&&new n(x,Q);let U=await(i?k(S,m):k(x,Q));const z=p&&(X==="stream"||X==="response");if(p&&(M||z&&B)){const u={};["status","statusText","headers"].forEach(F=>{u[F]=U[F]});const A=w.toFiniteNumber(U.headers.get("content-length")),[I,D]=M&&mi(A,Jt(gi(M),!0))||[];U=new r(xi(U.body,bi,I,()=>{D&&D(),B&&B()}),u)}X=X||"text";let f=await y[w.findKey(y,X)||"text"](U,v);return!z&&B&&B(),await new Promise((u,A)=>{fi(u,A,{data:f,headers:ue.from(U.headers),status:U.status,statusText:U.statusText,config:v,request:S})})}catch(W){throw B&&B(),W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)?Object.assign(new P("Network Error",P.ERR_NETWORK,v,S),{cause:W.cause||W}):P.from(W,W&&W.code,v,S)}}},zc=new Map,Ei=e=>{let t=e?e.env:{};const{fetch:n,Request:r,Response:a}=t,i=[r,a,n];let s=i.length,o=s,l,c,p=zc;for(;o--;)l=i[o],c=p.get(l),c===void 0&&p.set(l,c=o?new Map:Lc(t)),p=c;return c};Ei();const nr={http:cc,xhr:Bc,fetch:{get:Ei}};w.forEach(nr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ai=e=>`- ${e}`,Hc=e=>w.isFunction(e)||e===null||e===!1,Ci={getAdapter:(e,t)=>{e=w.isArray(e)?e:[e];const{length:n}=e;let r,a;const i={};for(let s=0;s<n;s++){r=e[s];let o;if(a=r,!Hc(r)&&(a=nr[(o=String(r)).toLowerCase()],a===void 0))throw new P(`Unknown adapter '${o}'`);if(a&&(w.isFunction(a)||(a=a.get(t))))break;i[o||"#"+s]=a}if(!a){const s=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=n?s.length>1?`since :
`+s.map(Ai).join(`
`):" "+Ai(s[0]):"as no adapter specified";throw new P("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return a},adapters:nr};function rr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new tt(null,e)}function Ti(e){return rr(e),e.headers=ue.from(e.headers),e.data=tr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ci.getAdapter(e.adapter||wt.adapter,e)(e).then(function(r){return rr(e),r.data=tr.call(e,e.transformResponse,r),r.headers=ue.from(r.headers),r},function(r){return hi(r)||(rr(e),r&&r.response&&(r.response.data=tr.call(e,e.transformResponse,r.response),r.response.headers=ue.from(r.response.headers))),Promise.reject(r)})}const Mi="1.12.2",Yt={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ii={};Yt.transitional=function(t,n,r){function a(i,s){return"[Axios v"+Mi+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,o)=>{if(t===!1)throw new P(a(s," has been removed"+(n?" in "+n:"")),P.ERR_DEPRECATED);return n&&!Ii[s]&&(Ii[s]=!0,console.warn(a(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,o):!0}},Yt.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Wc(e,t,n){if(typeof e!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],s=t[i];if(s){const o=e[i],l=o===void 0||s(o,i,e);if(l!==!0)throw new P("option "+i+" must be "+l,P.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new P("Unknown option "+i,P.ERR_BAD_OPTION)}}const Xt={assertOptions:Wc,validators:Yt},Ee=Xt.validators;let Ue=class{constructor(t){this.defaults=t||{},this.interceptors={request:new ci,response:new ci}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ke(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:i}=n;r!==void 0&&Xt.assertOptions(r,{silentJSONParsing:Ee.transitional(Ee.boolean),forcedJSONParsing:Ee.transitional(Ee.boolean),clarifyTimeoutError:Ee.transitional(Ee.boolean)},!1),a!=null&&(w.isFunction(a)?n.paramsSerializer={serialize:a}:Xt.assertOptions(a,{encode:Ee.function,serialize:Ee.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Xt.assertOptions(n,{baseUrl:Ee.spelling("baseURL"),withXsrfToken:Ee.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&w.merge(i.common,i[n.method]);i&&w.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=ue.concat(s,i);const o=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(l=l&&x.synchronous,o.unshift(x.fulfilled,x.rejected))});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let p,y=0,d;if(!l){const v=[Ti.bind(this),void 0];for(v.unshift(...o),v.push(...c),d=v.length,p=Promise.resolve(n);y<d;)p=p.then(v[y++],v[y++]);return p}d=o.length;let g=n;for(;y<d;){const v=o[y++],x=o[y++];try{g=v(g)}catch(h){x.call(this,h);break}}try{p=Ti.call(this,g)}catch(v){return Promise.reject(v)}for(y=0,d=c.length;y<d;)p=p.then(c[y++],c[y++]);return p}getUri(t){t=Ke(this.defaults,t);const n=yi(t.baseURL,t.url,t.allowAbsoluteUrls);return li(n,t.params,t.paramsSerializer)}};w.forEach(["delete","get","head","options"],function(t){Ue.prototype[t]=function(n,r){return this.request(Ke(r||{},{method:t,url:n,data:(r||{}).data}))}}),w.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,o){return this.request(Ke(o||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Ue.prototype[t]=n(),Ue.prototype[t+"Form"]=n(!0)});let Kc=class Wi{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const s=new Promise(o=>{r.subscribe(o),i=o}).then(a);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,o){r.reason||(r.reason=new tt(i,s,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Wi(function(a){t=a}),cancel:t}}};function Uc(e){return function(n){return e.apply(null,n)}}function qc(e){return w.isObject(e)&&e.isAxiosError===!0}const ar={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ar).forEach(([e,t])=>{ar[t]=e});function Ri(e){const t=new Ue(e),n=Ga(Ue.prototype.request,t);return w.extend(n,Ue.prototype,t,{allOwnKeys:!0}),w.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return Ri(Ke(e,a))},n}const te=Ri(wt);te.Axios=Ue,te.CanceledError=tt,te.CancelToken=Kc,te.isCancel=hi,te.VERSION=Mi,te.toFormData=Gt,te.AxiosError=P,te.Cancel=te.CanceledError,te.all=function(t){return Promise.all(t)},te.spread=Uc,te.isAxiosError=qc,te.mergeConfig=Ke,te.AxiosHeaders=ue,te.formToJSON=e=>ui(w.isHTMLForm(e)?new FormData(e):e),te.getAdapter=Ci.getAdapter,te.HttpStatusCode=ar,te.default=te;const{Axios:Zd,AxiosError:Yd,CanceledError:Xd,isCancel:Qd,CancelToken:eu,VERSION:tu,all:nu,Cancel:ru,isAxiosError:au,spread:iu,toFormData:su,AxiosHeaders:ou,HttpStatusCode:lu,formToJSON:cu,getAdapter:du,mergeConfig:uu}=te;function Gc({showTimestamp:e=!0}={}){const t={INFO:console.info,SUCCESS:console.log,WARN:console.warn,ERROR:console.error};function n({scope:a,message:i,showTimestamp:s=!0}){const o=s?new Date().toLocaleTimeString():"";return`${`[BW_${a}${o?" "+o:""}]`}: ${i}`}function r(a,{scope:i,message:s,data:o}){if(!window.BW_DEBUG_MODE)return;const l=t[a]||console.log;if(o){const c=Array.isArray(o)&&o.length===1?o[0]:o;l(n({scope:i,message:s}),`
`,c)}else l(n({scope:i,message:s}))}return{info(a){r("INFO",a)},success(a){r("SUCCESS",a)},warn(a){r("WARN",a)},error(a){r("ERROR",a)}}}const K={widgetInit(){return{scope:"WIDGET",message:"Initialized"}},widgetOpen(){return{scope:"WIDGET",message:"Opened"}},widgetClose(){return{scope:"WIDGET",message:"Closed"}},fetchStart(e){return{scope:"FETCH",message:`Fetching ${e}...`}},fetchSuccess(e,t){return{scope:"FETCH",message:`Fetched ${e}`,data:t}},fetchRewrite(e){return{scope:"FETCH",message:"Rewrote api response",data:e}},fetchError(e,t){return{scope:"FETCH",message:(t==null?void 0:t.message)||`Failed to fetch ${e}`}},userViewed(e){return{scope:"USER",message:`Viewed ${e}`}},userSelected(e,t){return{scope:"USER",message:`Selected ${e}`,data:t}},bookingStart(){return{scope:"BOOKING",message:"Booking started..."}},bookingSuccess(e){return{scope:"BOOKING",message:"Booking confirmed successfully",data:e}},bookingFailed(e){return{scope:"BOOKING",message:(e==null?void 0:e.message)||"Booking failed"}},paymentStarted(){return{scope:"PAYMENT",message:"Started"}},paymentSuccess(e){return{scope:"PAYMENT",message:`Success - ID: ${e}`}},paymentFailed(e){return{scope:"PAYMENT",message:(e==null?void 0:e.message)||"Payment failed"}},analyticsSend(e,t){return{scope:"ANALYTICS_SEND",message:`Sent analytics event: ${e}`,data:t}}},b=Gc({showTimestamp:!0}),Vc=(globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)||{},Jc=new URLSearchParams((($i=globalThis==null?void 0:globalThis.location)==null?void 0:$i.search)||"").get("bw_api");let Oi=null;try{Oi=localStorage.getItem("bw-api-base")}catch{}const Zc=Vc.apiBaseURL||Jc||Oi||"https://app.optikpartner.dk/api/v3/public/booking/",Ae=te.create({baseURL:Zc,headers:{"Content-Type":"application/json"}});Ae.interceptors.request.use(e=>(b.info({scope:"HTTP",message:`-> ${String(e.method||"GET").toUpperCase()} ${e.baseURL||""}${e.url||""}`,data:{url:e.url,baseURL:e.baseURL,method:e.method,headers:e.headers,data:e.data}}),e)),Ae.interceptors.response.use(e=>{var t,n;return b.success({scope:"HTTP",message:`<- ${e.status} ${String(((t=e.config)==null?void 0:t.method)||"GET").toUpperCase()} ${((n=e.config)==null?void 0:n.url)||""}`,data:e.data}),e},e=>{var t,n,r,a;return b.error({scope:"HTTP",message:`XX ${((t=e==null?void 0:e.response)==null?void 0:t.status)||""} ${String(((n=e==null?void 0:e.config)==null?void 0:n.method)||"GET").toUpperCase()} ${((r=e==null?void 0:e.config)==null?void 0:r.url)||""} - ${e==null?void 0:e.message}`,data:((a=e==null?void 0:e.response)==null?void 0:a.data)||e}),Promise.reject(e)});function Yc(e){if(e){Ae.defaults.baseURL=e;try{localStorage.setItem("bw-api-base",e)}catch{}}}function xt(e,t){if(!t||typeof t!="object")return e;const n=Array.isArray(e)?e.slice():{...e};for(const[r,a]of Object.entries(t))a&&typeof a=="object"&&!Array.isArray(a)?n[r]=xt(n[r]||{},a):n[r]=a;return n}const Xc=async({id:e,additionalInfoForRequest:t})=>{var i,s,o;const n=cd(),r=(i=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:i.onBeforeApiInit,a=rt(r,{id:e,uuid:n,body:t});try{b.info(K.fetchStart("config"));let l;a.uuid?l=await Ae.post(`init?id=${a.id}&uuid=${a.uuid}`,a.body):l=await Ae.post(`init?id=${a.id}`,a.body);const c=l.data.result;b.success(K.fetchSuccess("config",c));const p=(s=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:s.onApiInit,y=nt(p,c),d=(globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)||{};let g=y;return d.uiOverrides&&(g=xt(g,{ui:d.uiOverrides})),d.locale&&(g=xt(g,{organization:{locale:d.locale}})),d.currency&&(g=xt(g,{organization:{currency:d.currency}})),d.overrideConfig&&(g=xt(g,d.overrideConfig)),(d.uiOverrides||d.locale||d.currency||d.overrideConfig)&&b.info({scope:"CONFIG",message:"Applied config overrides",data:{uiOverrides:!!d.uiOverrides,locale:!!d.locale,currency:!!d.currency,overrideConfig:!!d.overrideConfig}}),!a.uuid&&((o=g==null?void 0:g.identifier)!=null&&o.uuid)&&ld(g.identifier.uuid,g.identifier.retension),g}catch(l){b.error(K.fetchError("config",l))}};function Qc(e){if(!e)return;const t=Math.floor(e/60),n=Math.floor(e%60);return`${t?t+"h ":""}${n?n+"m":""}`.trim()}function Qt(e){let t=e.replace("#","").toLowerCase();if(t.length===3&&(t=t.split("").map(s=>s+s).join("")),t.length===8&&(t=t.slice(0,6)),!/^([0-9a-f]{6})$/i.test(t))return"#000000";const n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);return(n*299+r*587+a*114)/1e3>=128?"#000000":"#FFFFFF"}function ir(e){const t=C(e);return{400:t.clone().lighten(10).toRgbString(),500:t.toRgbString(),600:t.clone().darken(10).toRgbString()}}function sr(e,t){return Object.keys(t).map(a=>({[`--color-${e}-${a}`]:t[a]}))}const ed=(e,t=90)=>{const n=C(e),r=Math.max(0,Math.min(t,100));return C.mix("#ffffff",n,100-r).toHexString()},td=(e,t=90)=>{const n=C(e),r=Math.max(0,Math.min(t,100));return C.mix("#ffffff",n,100-r).toHexString()};function nd(e){if(!e)return b.error({scope:"FORM",message:"Form schema is missing"}),{errors:{},schema:{},formData:{}};const t={schema:e,formData:{},errors:{},validateField(n){const r=this.formData[n],a=this.schema[n];a&&(a.required&&(r==null||typeof r=="string"&&r.trim()===""||typeof r=="boolean"&&r===!1)?this.errors[n]=`Please enter a valid ${a.label||n}`:a.type==="email"&&r&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?this.errors[n]="Please enter a valid email address":this.errors[n]="")},async validateAll(){for(const n of Object.keys(this.schema))this.validateField(n);return!Object.values(this.errors).some(Boolean)},focusFirstInvalidField(){const n=Object.keys(this.errors).find(r=>this.errors[r]&&!this.formData[r]);if(n){const r=document.getElementById(this.schema[n].key);r&&(r.scrollIntoView({behavior:"smooth",block:"center"}),r.focus({preventScroll:!0}))}}};for(const n in e){const r=e[n];t.formData[n]=r.value!==void 0?r.value:r.type==="checkbox"?!1:""}return t}function Di(e,t=null){const n=new DOMParser,r=(a,i)=>{const s=n.parseFromString(a,"text/html");s.querySelectorAll("script").forEach(o=>{const l=document.createElement("script");for(const c of o.attributes)l.setAttribute(c.name,c.value);l.textContent=o.textContent,i.appendChild(l)}),s.querySelectorAll("link").forEach(o=>{const l=document.createElement("link");for(const c of o.attributes)l.setAttribute(c.name,c.value);i.appendChild(l)}),s.querySelectorAll("style").forEach(o=>{const l=document.createElement("style");l.textContent=o.textContent;for(const c of o.attributes)l.setAttribute(c.name,c.value);i.appendChild(l)}),i===document.head&&s.querySelectorAll("meta").forEach(o=>{const l=document.createElement("meta");for(const c of o.attributes)l.setAttribute(c.name,c.value);i.appendChild(l)})};e.head&&r(e.head,document.head),e.body&&r(e.body,document.body),t&&(r(e.head,t),r(e.body,t))}function en(e,t){let n=0;return function(...r){const a=new Date().getTime();if(a-n>=t)return n=a,e(...r)}}function rd(e){const t={};for(const[n,r]of Object.entries(e)){let a={};"preselected"in r?a.preselected=r.preselected:n==="service"||n==="location"?a.preselected=[]:n==="employee"&&(a.preselected=null),"allowMultiple"in r?a.allowMultiple=r.allowMultiple:(n==="employee"||n==="location")&&(a.allowMultiple=!1),("preselected"in a||"allowMultiple"in a)&&(t[n]=a)}return t}function ad(e){if(!e)return"00:00";const t=e.split(" ")[1],[n,r]=t.split(":");return`${n}:${r}`}const id=(e,t,n)=>{var p;const a=new Intl.NumberFormat(e.replace("_","-"),{style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:2}).formatToParts(n),i=((p=a.find(y=>y.type==="currency"))==null?void 0:p.value)||"",s=a.filter(y=>["integer","group","decimal","fraction"].includes(y.type)).map(y=>y.value).join(""),o=a.findIndex(y=>y.type==="currency"),l=a.findIndex(y=>y.type==="integer"),c=o<l;return{symbol:i,number:s,symbolBefore:c}};function sd(e){var c,p,y,d;if(!((c=e==null?void 0:e.slot)!=null&&c.start)||!((p=e==null?void 0:e.slot)!=null&&p.end))return"#";const t=((y=e.products)==null?void 0:y.map(g=>g.plugin_text).join(", "))||"Appointment",n=(d=e.slot)==null?void 0:d.location,r=n?`${n.street}, ${n.name} ${n.postcode}`:"",a=`Your appointment at ${r}`,i=new Date(e.slot.start),s=new Date(e.slot.end),o=g=>g.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(t)}&dates=${o(i)}/${o(s)}&details=${encodeURIComponent(a)}&location=${encodeURIComponent(r)}`}function od(e){if(!e||!e.street||!e.city||!e.postcode)return"#";const n=[e.street,`${e.city} ${e.postcode}`,e.country].filter(Boolean).join(", ");return`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(n)}`}function ld(e,t="7 days"){const n=Pi(t),r={value:e,expiry:n.getTime()};localStorage.setItem("bw-uuid",JSON.stringify(r))}function cd(){const e=localStorage.getItem("bw-uuid");if(e)try{const t=JSON.parse(e);return Date.now()>t.expiry?(localStorage.removeItem("bw-uuid"),null):t.value}catch{b.warn({scope:"STORAGE",message:"Corrupted data in 'bw-uuid'. Removing and resetting."}),localStorage.removeItem("bw-uuid")}return null}function Bi(e,t,n){const r=Pi(n),a={value:t,expiry:r.getTime()};localStorage.setItem(e,JSON.stringify(a))}function Fi(e){const t=localStorage.getItem(e);if(t)try{const n=JSON.parse(t);return Date.now()>n.expiry?(localStorage.removeItem(e),null):n.value}catch{b.warn({scope:"STORAGE",message:`Corrupted data for key '${e}'. Removing and resetting.`}),localStorage.removeItem(e)}return null}function Pi(e){const t={second:1e3,seconds:1e3,minute:6e4,minutes:6e4,hour:36e5,hours:36e5,day:864e5,days:864e5,week:6048e5,weeks:6048e5,month:2592e6,months:2592e6,year:31536e6,years:31536e6};try{const[n,r]=e.toLowerCase().trim().split(" "),a=parseInt(n),i=t[r];if(!i||isNaN(a))throw new Error("Invalid");return new Date(Date.now()+a*i)}catch(n){return b.warn({scope:"UTILS",message:"Invalid expiry string. Falling back to 7 days.",data:{input:e,error:String(n)}}),new Date(Date.now()+t.days*7)}}function or(){const e=window.innerWidth;return e<768?"mobile":e>=768&&e<1024?"tablet":"desktop"}function dd(e,t){if(!t)return"";const r=new Date(t).toLocaleDateString(e,{weekday:"long",year:"numeric",month:"long",day:"numeric"});return r?r.charAt(0).toLocaleUpperCase(e)+r.slice(1):""}function ud(e,t){return`${e}::${JSON.stringify(t)}`}function pd(e){if(!e||!e.provider){b.warn({scope:"ANALYTICS",message:"Analytics config missing/invalid. Skipping script insertion."});return}if(b.info({scope:"ANALYTICS",message:"Config detected",data:{provider:e.provider,trackingId:e.trackingId,autoLoadScript:!!e.autoLoadScript}}),window.dataLayer=window.dataLayer||[],e.provider==="ga"){if(window.BW_WIDGET_DISPATCH=function(){dataLayer.push(arguments)},e.autoLoadScript){b.info({scope:"ANALYTICS",message:"Loading GA script",data:{trackingId:e.trackingId}});const t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e.trackingId}`,document.head.appendChild(t),BW_WIDGET_DISPATCH("js",new Date),BW_WIDGET_DISPATCH("config",e.trackingId)}}else if(e.provider==="gtm"&&(window.BW_WIDGET_DISPATCH=function(t,n,r){const a={event:n,...r};window.dataLayer.push(a)},e.autoLoadScript)){b.info({scope:"ANALYTICS",message:"Loading GTM script",data:{containerId:e.trackingId}}),window.dataLayer.push({"gtm.start":new Date().getTime(),event:"gtm.js"});const t=document.createElement("script");t.async=!0;const n="";t.src=`https://www.googletagmanager.com/gtm.js?id=${e.trackingId}${n}`;const r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);const a=document.createElement("iframe");a.src=`https://www.googletagmanager.com/ns.html?id=${e.trackingId}`,a.height="0",a.width="0",a.style.display="none",a.style.visibility="hidden",document.body.appendChild(a)}}function hd(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1_$2").toLowerCase()}const Ni=new Map;function fd(e,t){const n=hd(e);Ni.set(n,t)}function md(e){if(typeof BW_WIDGET_DISPATCH!="function"||!((e==null?void 0:e.ga)||[]).some(i=>i.includes("view")))return;const r={location:"view_location",service:"view_service",employee:"view_employee",schedule:"view_schedule",submit:"view_submit",thankyou:"view_thankyou"}[e.key];if(!r)return;const a=Ni.get(r)||{};BW_WIDGET_DISPATCH("event",r,{...a}),b.info(K.analyticsSend(r,a))}function Be(e,t){if(!(typeof BW_WIDGET_DISPATCH!="function"||!((e==null?void 0:e.ga)||[]).some(r=>r.includes("choose")))){if(e.key==="location"&&(t.locations||[]).forEach(r=>{const a={location_id:r.id,location_name:r.name};BW_WIDGET_DISPATCH("event","choose_location",a),b.info(K.analyticsSend("choose_location",a))}),e.key==="service"&&(t.products||[]).forEach(r=>{const a={service_id:r.id,service_name:r.name};BW_WIDGET_DISPATCH("event","choose_service",a),b.info(K.analyticsSend("choose_service",a))}),e.key==="employee"){const r=t.employee;if(r){const a={employee_id:r.id,employee_name:r.fullname};BW_WIDGET_DISPATCH("event","choose_employee",a),b.info(K.analyticsSend("choose_employee",a))}}if(e.key==="schedule"&&t.slot){const r={slot:t.slot.start};BW_WIDGET_DISPATCH("event","choose_schedule",r),b.info(K.analyticsSend("choose_schedule",r))}}}function nt(e,t){if(typeof e=="function"){const n=e(JSON.parse(JSON.stringify(t)));return n!==void 0&&n!==t&&b.info(K.fetchRewrite(n)),n!==void 0?n:t}return t}function rt(e,t){if(typeof e=="function"){const n=JSON.parse(JSON.stringify(t)),r=e(n);return r!==void 0&&r!==t&&b.info({scope:"FETCH",message:"Rewrote api request",data:r}),r!==void 0?r:t}return t}const lr={en:{onAt:"On {date} at {time}",dateTimeNotSelected:"Date & Time not selected"},da:{onAt:"{date} kl. {time}",dateTimeNotSelected:"Dato og tidspunkt er ikke valgt"},de:{onAt:"Am {date} um {time}",dateTimeNotSelected:"Datum und Uhrzeit nicht ausgewählt"},es:{onAt:"El {date} a las {time}",dateTimeNotSelected:"Fecha y hora no seleccionadas"},fr:{onAt:"Le {date} à {time}",dateTimeNotSelected:"Date et heure non sélectionnées"}};function gd(e){return String(e||"en").split(/[-_]/)[0].toLowerCase()}function yd(e,t={}){return String(e||"").replace(/\{(\w+)\}/g,(n,r)=>t[r]??"")}function wd(e,t={}){const n=gd(e),r=lr[n]||lr.en,a=(t==null?void 0:t[n])||{},i={...r,...a},s={...lr.en,...(t==null?void 0:t.en)||{}};return(o,l)=>yd(i[o]??s[o]??o,l)}function vd(e="en-US",t={}){return{month:0,year:0,daysInMonth:[],blankDays:[],selectedDate:null,today:new Date,locale:e,weekStart:(t.weekStart||"monday").toLowerCase(),monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],years:Array.from({length:10},(n,r)=>new Date().getFullYear()-5+r),bookedDates:[],availableDates:[],init(){const n=new Date;this.month=n.getMonth(),this.year=n.getFullYear(),this.monthNames=Array.from({length:12},(r,a)=>new Intl.DateTimeFormat(this.locale,{month:"short"}).format(new Date(this.year,a))),this.daysShort=Array.from({length:7},(r,a)=>new Intl.DateTimeFormat(this.locale,{weekday:"short"}).format(new Date(2023,6,(this.weekStart==="monday"?31:30)+a))),this.calculateDays()},formatDateKey(n,r,a){return`${n}-${String(r+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`},isBooked(n){return this.bookedDates.includes(this.formatDateKey(this.year,this.month,n))},getDate(n){return this.formatDateKey(this.year,this.month,n)},isToday(n){const r=this.today;return r.getFullYear()===this.year&&r.getMonth()===this.month&&r.getDate()===n},prevMonth(){this.month===0?(this.month=11,this.year--):this.month--,this.calculateDays()},nextMonth(){this.month===11?(this.month=0,this.year++):this.month++,this.calculateDays()},getMonth(){return this.monthNames[this.month]},setMonth(n){n&&(this.month=Number(n.split("-")[1])-1,this.calculateDays())},calculateDays(){const n=new Date(this.year,this.month+1,0).getDate(),r=new Date(this.year,this.month).getDay(),a=this.weekStart==="monday"?(r+6)%7:r;this.blankDays=Array.from({length:a},(i,s)=>s+1),this.daysInMonth=Array.from({length:n},(i,s)=>s+1)}}}async function xd({id:e,uuid:t,additionalInfoForRequest:n}){var s,o,l,c;const r=(s=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:s.onBeforeApiService,a=rt(r,{id:e,uuid:t,body:n}),i=await Ae.post(`product?id=${a.id}&uuid=${a.uuid}`,a.body,{headers:{"Content-Type":"application/json"}});return b.success({scope:"FETCH",message:"Products fetched",data:{count:((c=(l=(o=i==null?void 0:i.data)==null?void 0:o.result)==null?void 0:l.items)==null?void 0:c.length)||0}}),i.data.result.items}async function bd({id:e,uuid:t,additionalInfoForRequest:n}){var s,o,l,c;const r=(s=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:s.onBeforeApiLocation,a=rt(r,{id:e,uuid:t,body:n}),i=await Ae.post(`location?id=${a.id}&uuid=${a.uuid}`,a.body);return b.success({scope:"FETCH",message:"Locations fetched",data:{count:((c=(l=(o=i==null?void 0:i.data)==null?void 0:o.result)==null?void 0:l.items)==null?void 0:c.length)||0}}),i.data.result.items}const cr=new Map;async function kd({id:e,uuid:t,body:n}){var l,c,p;const r=(l=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:l.onBeforeApiEmployee,a=rt(r,{id:e,uuid:t,body:n}),i=ud(`employee?id=${a.id}&uuid=${a.uuid}`,a.body);if(b.info({scope:"CACHE",message:"Employee cache lookup",data:{key:i}}),cr.has(i))return b.success({scope:"CACHE",message:"Employee cache HIT",data:{key:i}}),cr.get(i);b.info({scope:"CACHE",message:"Employee cache MISS",data:{key:i}});const o=((p=(c=(await Ae.post(`employee?id=${a.id}&uuid=${a.uuid}`,a.body)).data)==null?void 0:c.result)==null?void 0:p.items)||[];return b.info({scope:"FETCH",message:"Employee raw items fetched",data:{totalLocations:o.length,totalEmployees:o.reduce((y,d)=>{var g;return y+(((g=d.employees)==null?void 0:g.length)||0)},0)}}),cr.set(i,o),o}async function Sd({id:e,uuid:t,body:n}){var c,p,y;const r=(c=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:c.onBeforeApiSchedule,a=rt(r,{id:e,uuid:t,body:n}),i=`schedule?id=${a.id}&uuid=${a.uuid}&_=${Date.now()}`,o=((y=(p=(await Ae.post(i,a.body,{headers:{"Content-Type":"application/json"}})).data)==null?void 0:p.result)==null?void 0:y.items)||[],l=o.reduce((d,g)=>{var x;if(!g.location||!((x=g.intervals)!=null&&x.intervals))return d;const v=g.location.id;return d[v]={location:g.location,intervals:g.intervals.intervals},d},{});return b.info({scope:"FETCH",message:"Schedule grouped",data:{groups:Object.keys(l).length,totalItems:o.length}}),l}function _d(e={},t={}){var p,y;const n=e.ui.flow||"service",r=e.steps||{},i=Object.keys(r).map(d=>{const g=r[d];return{key:d,icon:Ed(d),...g.labels,...g}}).filter(d=>d&&d.key!=="payment");if(n==="location"||n==="service"){const d=i.findIndex(g=>g.key===n);if(d>0){const[g]=i.splice(d,1);i.unshift(g)}}b.info({scope:"WIZARD",message:`Initialized steps (flow='${n}')`,data:i.map((d,g)=>{var v,x,h;return{index:g+1,key:d.key,skip:d.skip===!0||d.skipOnForward===!0||typeof d.skip=="object"&&(((v=d.skip)==null?void 0:v.forward)||((x=d.skip)==null?void 0:x.back)),hideInMenu:d.hideInMenu===!0||typeof d.skip=="object"&&((h=d.skip)==null?void 0:h.menu)===!0}})});const s=d=>{var g;return(d==null?void 0:d.skip)===!0||(d==null?void 0:d.skipOnForward)===!0||typeof(d==null?void 0:d.skip)=="object"&&((g=d==null?void 0:d.skip)==null?void 0:g.forward)===!0},o=i.filter(d=>!s(d));b.info({scope:"WIZARD",message:"navigationStepsForward (init) compiled",data:o.map(d=>d.key)});const l=((p=o[0])==null?void 0:p.key)||((y=i[0])==null?void 0:y.key),c=Math.max(0,i.findIndex(d=>d.key===l));return b.info({scope:"WIZARD",message:"Start step resolved",data:{startKey:l,startIndex:c+1}}),{containerRef:t.container||null,currentStep:c+1,currentKey:l,collapse:!1,inPageSize:null,steps:i,maxStep:i.length,advancing:!1,handleResize(){const d=this.containerRef,g=()=>{d?(d.offsetWidth<=768&&(this.inPageSize="sm"),this.collapse=d.offsetWidth<=768):this.collapse=window.innerWidth>=768&&window.innerWidth<1024};g();const v=en(g.bind(this),200);window.addEventListener("resize",v)},nextStep(){if(this.advancing){b.info({scope:"WIZARD",message:"nextStep suppressed (advancing)"});return}const d=this.navigationStepsForward,g=d.findIndex(T=>T.key===this.currentKey);if(g===-1||g>=d.length-1){b.info({scope:"WIZARD",message:"nextStep at end of navigation"});return}this.advancing=!0;const v={step:this.currentStep,key:this.currentKey},x=d[g+1],h=this.steps.findIndex(T=>T.key===x.key),E=this.collectSkippedForward(this.currentStep+1,h-1);this.currentStep=h+1,this.currentKey=x.key,b.info({scope:"WIZARD",message:"nextStep (navigationStepsForward)",data:{from:v,to:{step:this.currentStep,key:this.currentKey},skippedForward:E}}),queueMicrotask(()=>{this.advancing=!1})},prevStep(){var E;const d=this.navigationStepsBack,g=d.findIndex(T=>T.key===this.currentKey);if(g<=0){b.info({scope:"WIZARD",message:"prevStep at start of navigation"});return}const v={step:this.currentStep,key:this.currentKey},x=(E=d[g-1])==null?void 0:E.key,h=this.steps.findIndex(T=>T.key===x);this.currentStep=h+1,this.currentKey=x,b.info({scope:"WIZARD",message:"prevStep (navigationSteps)",data:{from:v,to:{step:this.currentStep,key:this.currentKey}}})},goToStep(d){var E;if(this.advancing){b.info({scope:"WIZARD",message:"goToStep suppressed (advancing)"});return}this.advancing=!0;const g={step:this.currentStep,key:this.currentKey},v=d>this.currentStep,x=v?this.getNextNonSkippedIndex(d):d,h=v?this.collectSkippedForward(this.currentStep+1,x-1):this.collectSkippedBack(this.currentStep-1,x+1);this.currentStep=Math.max(1,Math.min(x,this.maxStep)),this.currentKey=(E=this.steps[this.currentStep-1])==null?void 0:E.key,b.info({scope:"WIZARD",message:"goToStep",data:{requested:d,from:g,to:{step:this.currentStep,key:this.currentKey},direction:v?"forward":"back",skipped:h}}),queueMicrotask(()=>{this.advancing=!1})},canGoBack(){return this.navigationStepsBack.findIndex(g=>g.key===this.currentKey)>0},hasNextStep(){return this.currentStep<this.maxStep},isInNavigation(d){const g=this.navigationStepsForward.some(x=>x.key===d),v=this.navigationStepsBack.some(x=>x.key===d);return g||v},stepKeyByIndex(d){var g;return((g=this.steps[d])==null?void 0:g.key)||null},getStepByKey(d){return this.steps.find(g=>g.key===d)},hasSingleMatch(d){var g,v,x;return d==="service"?Array.isArray((g=this.products)==null?void 0:g.available)&&this.products.available.length===1:d==="location"?Array.isArray((v=this.locations)==null?void 0:v.available)&&this.locations.available.length===1:d==="employee"?Array.isArray((x=this.employees)==null?void 0:x.available)&&this.employees.available.length===1:!1},shouldSkipBySingleMatch(d){return!d||!d.key?!1:this.hasSingleMatch(d.key)},shouldSkipNavigation(d){var h,E,T;if(!d)return!1;const g=d.skip===!0||d.skipOnForward===!0||d.skipOnBack===!0||typeof d.skip=="object"&&(((h=d.skip)==null?void 0:h.forward)===!0||((E=d.skip)==null?void 0:E.back)===!0),v=this.shouldSkipBySingleMatch(d),x=d.key==="employee"&&Array.isArray((T=this.employees)==null?void 0:T.available)&&this.employees.available.length===0;return g||v||x},shouldSkipOnBack(d){return d?this.shouldSkipNavigation(d):!1},shouldSkipForward(d){return d?this.shouldSkipNavigation(d):!1},getNextNonSkippedIndex(d){let g=d;for(;g<=this.maxStep&&this.shouldSkipForward(this.steps[g-1]);)g++;return Math.min(g,this.maxStep)},collectSkippedForward(d,g){const v=[];for(let x=d;x<=Math.min(g,this.maxStep);x++){const h=this.steps[x-1];this.shouldSkipForward(h)&&v.push(h==null?void 0:h.key)}return v},collectSkippedBack(d,g){const v=[];for(let x=d;x>=Math.max(1,g);x--){const h=this.steps[x-1];this.shouldSkipOnBack(h)&&v.push(h==null?void 0:h.key)}return v},get menuSteps(){const d=this.steps.filter(g=>{var h,E;if(g.key==="submit"||g.key==="thankyou"||g.skip===!0||g.skipOnForward===!0||g.skipOnBack===!0||typeof g.skip=="object"&&(((h=g.skip)==null?void 0:h.forward)===!0||((E=g.skip)==null?void 0:E.back)===!0))return!1;const x=this.shouldSkipBySingleMatch(g);return!(g.key==="employee"&&x)});return b.info({scope:"WIZARD",message:"menuSteps compiled",data:d.map(g=>g.key)}),d},get navigationStepsBack(){const d=this.steps.filter(g=>!this.shouldSkipOnBack(g));return b.info({scope:"WIZARD",message:"navigationStepsBack compiled",data:d.map(g=>g.key)}),d},get navigationStepsForward(){const d=this.steps.filter(g=>!this.shouldSkipForward(g));return b.info({scope:"WIZARD",message:"navigationStepsForward compiled",data:d.map(g=>g.key)}),d},goToStepByKey(d){var N;if(this.advancing){b.info({scope:"WIZARD",message:"goToStepByKey suppressed (advancing)"});return}this.advancing=!0;const v=this.steps.map(M=>M.key).findIndex(M=>String(M).toLowerCase()===String(d).toLowerCase());if(v===-1){b.warn({scope:"WIZARD",message:`goToStepByKey: key '${d}' not found`}),this.advancing=!1;return}const x={step:this.currentStep,key:this.currentKey},h=v+1,E=h>this.currentStep,T=E?this.getNextNonSkippedIndex(h):h,O=E?this.collectSkippedForward(this.currentStep+1,T-1):this.collectSkippedBack(this.currentStep-1,T+1);this.currentStep=T,this.currentKey=(N=this.steps[this.currentStep-1])==null?void 0:N.key,b.info({scope:"WIZARD",message:"goToStepByKey",data:{requestedKey:d,resolvedIndex:h,from:x,to:{step:this.currentStep,key:this.currentKey},direction:E?"forward":"back",skipped:O}}),queueMicrotask(()=>{this.advancing=!1})},getCurrentKey(){var d,g;return((g=(d=this.steps)==null?void 0:d[this.currentStep-2])==null?void 0:g.key)||null}}}function Ed(e){return{service:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>',location:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',employee:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>',schedule:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock-icon lucide-calendar-clock"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>',submit:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',payment:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',thankyou:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>'}[e]||"circle"}async function Ad({id:e,uuid:t,body:n}){var r;try{const a=(r=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:r.onBeforeApiConfirm,i=rt(a,{id:e,uuid:t,body:n});return(await Ae.post(`confirm?id=${i.id}&uuid=${i.uuid}`,i.body,{headers:{"Content-Type":"application/json"}})).data.result}catch(a){throw a}}function Cd(e,t,n,r,a,i={}){var E,T,O,N,M,re,X,ie,pe;const{onApiLocation:s,onApiService:o,onApiEmployee:l,onApiSchedule:c,onApiConfirm:p}=window.BW_WIDGET_CONFIG,y=rd(n.steps),d=n.identifier.uuid,g=m=>Array.isArray(m)?m.slice():m!=null&&m!==!1&&m!==""?[m]:[],v=g((E=y.service)==null?void 0:E.preselected),x=g((T=y.location)==null?void 0:T.preselected),h=(()=>{var k;const m=(k=y.employee)==null?void 0:k.preselected;return Array.isArray(m)?m.length===1?String(m[0]):null:m!=null&&m!==!1&&m!==""?String(m):null})();return{instanceKey:i.instanceKey||null,modal:{status:t==="INPAGE",type:t,showToast:!1,toastContent:null,showToggler:!0,animateToggler:(N=(O=n.ui)==null?void 0:O.popup)==null?void 0:N.animation,icon:(re=(M=n.ui)==null?void 0:M.popup)==null?void 0:re.icon,menuLabels:(X=n.generel)==null?void 0:X.menu,text:(pe=(ie=n.ui)==null?void 0:ie.popup)==null?void 0:pe.iconText,open(){this.status=!0,b.success(K.widgetOpen())},close(){this.status=!1,b.info(K.widgetClose())}},..._d(n,{container:i.container}),__onConfirmDispatched:!1,isStepCompleted(m){var k,_;switch(m){case"service":return((k=this.summary.products)==null?void 0:k.length)>0;case"location":return((_=this.summary.locations)==null?void 0:_.length)>0;case"employee":return this.currentStep===3||!!this.summary.employee;case"schedule":return!!this.summary.date&&!!this.summary.slot;default:return!1}},isPreselectedSingle(m){var _,S,B;const k=m==="service"?(_=y.service)==null?void 0:_.preselected:m==="location"?(S=y.location)==null?void 0:S.preselected:m==="employee"?(B=y.employee)==null?void 0:B.preselected:void 0;return Array.isArray(k)?k.length===1:k!=null&&k!==!1&&k!==""},transitionSlideInFromLeft:{"x-transition:enter":"transition duration-500 transform ease-out","x-transition:enter-start":"opacity-0 -translate-x-4","x-transition:enter-end":"opacity-100 translate-x-0"},transitionSlideInFromBottom:{"x-transition:enter":"transition ease-out duration-300","x-transition:enter-start":"opacity-0 translate-y-6","x-transition:enter-end":"opacity-100 translate-y-0"},transitionSlideInFromRight:{"x-transition:enter":"ease-out duration-300","x-transition:enter-start":"opacity-0 translate-x-4","x-transition:enter-end":"opacity-100 translate-x-0"},products:{available:[],activeCategory:"all",selected:v,loading:!1,error:null,async fetch(){if(!(this.available.length>0)){this.loading=!0,this.error=null;try{b.info(K.fetchStart("services"));const m=await xd({id:e,uuid:d,additionalInfoForRequest:a});if(b.success(K.fetchSuccess("services",m)),this.available=nt(o,m),Array.isArray(this.available)){const k=S=>{const B=Number(S==null?void 0:S.online_priority);return Number.isFinite(B)?B:-1/0},_=S=>String((S==null?void 0:S.plugin_text)||(S==null?void 0:S.name)||"");this.available=[...this.available].sort((S,B)=>{const L=k(B)-k(S);return L!==0?L:_(S).localeCompare(_(B))}),b.info({scope:"SERVICE",message:"Sorted services by online_priority desc",data:this.available.slice(0,5).map(S=>({id:S.id,priority:S.online_priority}))})}Array.isArray(this.available)&&this.available.length===1&&(!Array.isArray(this.selected)||this.selected.length===0)&&(this.selected=[this.available[0].id])}catch{this.error="Failed to load services",b.error(K.fetchError("services",this.error))}finally{this.loading=!1}}},toggleProduct(m){y.service.allowMultiple?this.selected.includes(m)?this.selected=this.selected.filter(k=>k!==m):this.selected.push(m):this.selected.includes(m)?this.selected=[]:this.selected=[m]},setActiveCategory(m){this.activeCategory=m},get availableCategory(){const m=new Map;return this.available.forEach(k=>{const _=k==null?void 0:k.product_group;!_||_.id==null||m.has(_.id)||m.set(_.id,{id:_.id,name:_.name,icon:_.icon})}),Array.from(m.values())}},locations:{available:[],selected:x,selectedRegion:"all",loading:!1,error:null,async fetch(){if(!(this.available.length>0)){this.loading=!0,this.error=null;try{b.info(K.fetchStart("locations"));const m=await bd({id:e,uuid:d,additionalInfoForRequest:a});if(b.success(K.fetchSuccess("locations",m)),this.available=nt(s,m),Array.isArray(this.available)){const k=S=>{const B=Number(S==null?void 0:S.priority);return Number.isFinite(B)?B:-1/0},_=S=>String((S==null?void 0:S.name)||"");this.available=[...this.available].sort((S,B)=>{const L=k(B)-k(S);return L!==0?L:_(S).localeCompare(_(B))}),b.info({scope:"LOCATION",message:"Sorted locations by priority desc, then name asc",data:this.available.slice(0,5).map(S=>({id:S.id,priority:S.priority,name:S.name}))})}Array.isArray(this.available)&&this.available.length===1&&(!Array.isArray(this.selected)||this.selected.length===0)&&(this.selected=[this.available[0].id])}catch{this.error="Failed to load locations",b.error(K.fetchError("locations",this.error))}finally{this.loading=!1}}},toggleLocation(m){y.location.allowMultiple?this.selected.includes(m)?this.selected=this.selected.filter(k=>k!==m):this.selected.push(m):this.selected===m||Array.isArray(this.selected)&&this.selected.includes(m)?this.selected=[]:this.selected=[m]},setSelectedRegion(m){this.selectedRegion=m},get availableRegion(){const m=new Map;return this.available.forEach(k=>{const _=k.region;_&&_.id&&(m.has(_.id)||m.set(_.id,{id:_.id,name:_.name,icon:_.icon}))}),Array.from(m.values())}},employees:{available:[],selected:h,loading:!1,error:null,grouped:null,allowAllEnabled:!1,setEmployee:function(m){this.selected=m?String(m):null},async fetch(m){var k,_;this.loading=!0,this.error=null;try{b.info(K.fetchStart("employees"));const S=await kd({id:e,uuid:d,body:{...m,...a}}),B=[],L=new Set;(S||[]).forEach(U=>{(U.employees||[]).forEach(z=>{var u;const f=((u=z==null?void 0:z.user)==null?void 0:u.id)??(z==null?void 0:z.id);f==null||L.has(f)||(L.add(f),B.push(z))})}),b.success(K.fetchSuccess("employees",JSON.parse(JSON.stringify(B))));const W=nt(l,B)||[],Q={};W.forEach(U=>{var u;const z=U.location||((u=U.user)==null?void 0:u.location)||null;if(!z||z.id==null)return;const f=z.id;Q[f]||(Q[f]={location:z,employees:[]}),Q[f].employees.push(U)}),this.grouped=Q,this.available=W,b.info({scope:"FETCH",message:"Employee grouped (post-hook)",data:{groups:Object.keys(Q).length,locations:Object.values(Q).length,totalEmployees:W.length}}),this.available.length===0?this.selected=!0:this.available.length===1?this.selected=String((_=(k=this.available[0])==null?void 0:k.user)==null?void 0:_.id):this.selected=h}catch{this.error="Failed to load employees",b.error(K.fetchError("employees",this.error))}finally{this.loading=!1}}},schedules:{newDate:null,selectedDate:null,quickSelected:!1,selected:null,selectedInterval:null,available:[],dates:[],grouped:null,loading:!1,error:null,maxAvailableMonth:null,setDate(m){this.selectedDate=m},setSelectedInterval(m){this.selectedInterval=m},setSelected(m){this.selected=m},isDateSelected(m){return m===this.selectedDate},isAvailable(m){return this.dates.includes(m)},getTimeSlotsForSelectedDate(m){const k=Array.isArray(m)?m[0]:m;return!this.selectedDate||!this.grouped||!this.grouped[k]?[]:this.grouped[k].intervals.flatMap(_=>_).filter(_=>_.start_date===this.selectedDate)},getQuickSlots(m){return this.grouped[m]?this.grouped[m].intervals.flatMap(k=>k).slice(0,3):[]},expand(m){const k=new Date;if(m)if(m===k.getMonth())setTimeout(()=>{this.selectedDate=this.dates[0]},100);else{m=m+1,m=m.toString().padStart(2,"0");const _=this.dates.filter(S=>S.split("-")[1]===m);setTimeout(()=>{this.selectedDate=_.length>0?_[0]:null},100)}else{const _=k.getHours();setTimeout(()=>{const S=_>=12&&this.dates[1]?1:0;this.selectedDate=this.dates[S]||null},100)}},async fetch(m){this.loading=!0,this.error=null;try{b.info(K.fetchStart("schedules"));const k=await Sd({id:e,uuid:d,body:{...m,...a}});if(this.grouped=k,this.available=Object.values(k).flatMap(_=>_.intervals.flatMap(S=>S)),this.dates=[...new Set(this.available.map(_=>_.start_date))],this.expand(),this.dates.length>0){const _=this.dates.at(-1);this.maxAvailableMonth=Number(_.split("-")[1])-1}else this.maxAvailableMonth=null;b.success(K.fetchSuccess("schedules",JSON.parse(JSON.stringify(this.available)))),this.available=nt(c,this.available)}catch(k){this.error=k.message||"Failed to load schedules",b.error(K.fetchError("schedules",this.error))}finally{this.loading=!1}}},submitData:{data:null,error:null,isSubmitting:!1,result:null},async confirm(){var m,k;try{b.info(K.bookingStart()),this.submitData.isSubmitting=!0;const _=await Ad({id:e,uuid:d,body:{...this.submitData.data,start:this.schedules.selectedInterval.start,location:Number((k=(m=this.schedules.selectedInterval)==null?void 0:m.location)==null?void 0:k.id),products:this.products.selected,employee:Number(this.employees.selected),...a}}),S=nt(p,_);this.submitData.result=S,S&&document.dispatchEvent(new CustomEvent("clubBookingConfirmed",{detail:S,bubbles:!0,cancelable:!0})),b.success(K.bookingSuccess(S))}catch{this.submitData.error="Failed to confirm booking",b.error(K.bookingFailed(this.submitData.error))}finally{this.submitData.isSubmitting=!1}},exposeModalMethods(){const m=i.instanceKey||"default";globalThis[`bwWidgetOpen_${m}`]=()=>this.modal.open(),globalThis[`bwWidgetClose_${m}`]=()=>this.modal.close(),globalThis.bwWidgetOpen||(globalThis.bwWidgetOpen=()=>this.modal.open()),globalThis.bwWidgetClose||(globalThis.bwWidgetClose=()=>this.modal.close())},setupResponsiveToggler(){const m=()=>{var B,L,W;const _=or(),S=((W=(L=(B=n.ui)==null?void 0:B.popup)==null?void 0:L[_])==null?void 0:W.enabled)??!0;this.modal.showToggler=S,b.info({scope:"VIEWPORT",message:"Responsive toggler evaluated",data:{deviceType:_,enabled:S}})};m();const k=en(m.bind(this),200);window.addEventListener("resize",k)},registerTrackEventPayloads(){Object.entries(r).forEach(([m,k])=>fd(m,k))},getScheduleParams(m){var W,Q,U,z;const k=new Date;let _=`${k.getFullYear()}-${(k.getMonth()+1).toString().padStart(2,"0")}-${k.getDate().toString().padStart(2,"0")}`;const S=new Date(_);S.setDate(S.getDate()+45);let B=`${S.getFullYear()}-${(S.getMonth()+1).toString().padStart(2,"0")}-${S.getDate().toString().padStart(2,"0")}`;const L=((Q=(W=this.summary.employee)==null?void 0:W.location)==null?void 0:Q.id)||((z=(U=this.schedules.selectedInterval)==null?void 0:U.location)==null?void 0:z.id)||null;return m!=null&&m.from&&(_=m.from),m!=null&&m.to&&(B=m.to),{from:_,to:B,locations:L?[L]:this.locations.selected,products:this.products.selected,employee:this.employees.selected===!0?[]:[this.employees.selected]}},refreshScheduleForVisibleMonth(m,k){try{const _=Number(m),S=Number(k),B=new Date(_,S+1,0).getDate(),L=String(S+1).padStart(2,"0"),W=`${_}-${L}-01`,Q=`${_}-${L}-${String(B).padStart(2,"0")}`;this._refetchScheduleRange?this._refetchScheduleRange({from:W,to:Q}):this.schedules.fetch(this.getScheduleParams({from:W,to:Q})).then(()=>this.updateSummary())}catch(_){b.warn({scope:"SCHEDULE",message:"Failed to compute month range for refresh",data:{year:m,month:k,error:String(_)}})}},setupLogWatchers(){this.$watch(()=>this.products.selected,()=>{this.summary.products.length>0&&b.info(K.userSelected("service",this.summary.products))}),this.$watch(()=>this.locations.selected,()=>{this.summary.locations.length>0&&b.info(K.userSelected("location",this.summary.locations))}),this.$watch(()=>this.employees.selected,()=>{this.summary.employee&&b.info(K.userSelected("employee",this.summary.employee))}),this.$watch(()=>this.schedules.selectedInterval,()=>{this.updateSummary(),this.summary.slot&&b.info(K.userSelected("schedule",this.summary.slot));const m=this.getStepByKey("schedule");this.currentKey==="schedule"&&(m==null?void 0:m.autoConfirm)===!0&&this.isStepCompleted("schedule")&&(Be(m,this.summary),this.nextStep())})},handleStepEnter(m){var L,W,Q,U,z;const k=this.getStepByKey(m);b.info(K.userViewed(k.key)),md(k),this.updateSummary();const _=String(m).charAt(0).toUpperCase()+String(m).slice(1),S=`onView${_}`,B={step:{key:m,index:this.currentStep,title:(k==null?void 0:k.title)||((L=this.getStepByKey(m))==null?void 0:L.title)},summary:JSON.parse(JSON.stringify(this.summary)),isAllValid:this.isAllValid()};try{const f=(W=globalThis==null?void 0:globalThis.BW_WIDGET_CONFIG)==null?void 0:W[S];typeof f=="function"&&(f(B),b.info({scope:"WIDGET",message:`${S} callback executed`,data:B.step}))}catch(f){b.error({scope:"WIDGET",message:`${S} callback threw`,data:String(f)})}if(document.dispatchEvent(new CustomEvent(`clubBookingView${_}`,{detail:B,bubbles:!0,cancelable:!0})),m==="thankyou"&&(window.BW_WIDGET_DISPATCH&&BW_WIDGET_DISPATCH("event","booking_confirmed"),!this.__onConfirmDispatched&&((Q=this.submitData)!=null&&Q.result))){try{(z=(U=window.BW_WIDGET_CONFIG)==null?void 0:U.onConfirm)==null||z.call(U,this.submitData.result),b.success({scope:"BOOKING",message:"onConfirm callback executed",data:this.submitData.result})}catch(f){b.error({scope:"BOOKING",message:"onConfirm callback threw",data:String(f)})}this.__onConfirmDispatched=!0}if(m==="service"&&this.products.fetch().then(()=>{if(this.updateSummary(),this.isPreselectedSingle("service")){b.info({scope:"WIZARD",message:"Auto-advance preselected single",data:{key:"service",selected:this.products.selected}}),this.nextStep();return}this.shouldSkipNavigation(this.getStepByKey("service"))&&(b.info({scope:"WIZARD",message:"Auto-skip single-match step",data:{key:"service"}}),this.nextStep())}),m==="location"&&this.locations.fetch().then(()=>{if(this.updateSummary(),this.isPreselectedSingle("location")){b.info({scope:"WIZARD",message:"Auto-advance preselected single",data:{key:"location",selected:this.locations.selected}}),this.nextStep();return}this.shouldSkipNavigation(this.getStepByKey("location"))&&(b.info({scope:"WIZARD",message:"Auto-skip single-match step",data:{key:"location"}}),this.nextStep())}),m==="employee"){const f=!Array.isArray(this.employees.available)||this.employees.available.length===0,u=()=>{if(this.updateSummary(),this.isPreselectedSingle("employee")){b.info({scope:"WIZARD",message:"Auto-advance preselected single",data:{key:"employee",selected:this.employees.selected}}),this.nextStep();return}this.shouldSkipNavigation(this.getStepByKey("employee"))&&(b.info({scope:"WIZARD",message:"Auto-skip single-match step",data:{key:"employee"}}),this.nextStep())};f&&this.products.selected.length&&this.locations.selected.length?this.employees.fetch({locations:this.locations.selected,products:this.products.selected}).then(u):u()}!this.summary.employee&&m==="schedule"&&this.schedules.fetch(this.getScheduleParams()).then(()=>this.updateSummary())},init(){this.exposeModalMethods(),this.setupResponsiveToggler(),this.registerTrackEventPayloads(),this.setupLogWatchers(),this._refetchScheduleRange=en(({from:m,to:k})=>{this.schedules.fetch(this.getScheduleParams({from:m,to:k})).then(()=>this.updateSummary())},400),this.$watch(()=>[this.products.selected,this.locations.selected],([m,k])=>{const _=m.length>0,S=k.length>0;this.currentKey==="service"&&_&&this.getStepByKey("service").autoConfirm&&(this.nextStep(),Be(this.getStepByKey("service"),this.summary)),this.currentKey==="location"&&S&&this.getStepByKey("location").autoConfirm&&(this.nextStep(),Be(this.getStepByKey("location"),this.summary))},{deep:!0}),this.$watch(()=>this.employees.selected,()=>{this.summary.employee&&this.schedules.fetch(this.getScheduleParams()).then(()=>this.updateSummary())}),this.$watch(()=>this.modal.status,m=>{m&&this.handleStepEnter(this.currentKey)}),this.$watch("currentKey",m=>{this.modal.status&&this.handleStepEnter(m)}),this.modal.status&&this.handleStepEnter(this.currentKey)},summary:{products:[],totalPrice:null,totalTime:null,locations:[],employee:null,date:null,slot:null},updateSummary(){var U;const m=this.products.available.filter(z=>this.products.selected.includes(z.id)),k=this.locations.available.filter(z=>this.locations.selected.includes(z.id));let _;if(this.employees.selected===!0)_=!0;else{const z=this.employees.available.find(f=>String(f.user.id)===this.employees.selected);_=z?z.user:null}const S=this.schedules.selectedDate,B=this.schedules.selectedInterval,L=m.reduce((z,f)=>z+(f.duration||0),0),Q=((U=this.getStepByKey("service"))==null?void 0:U.showPrice)!==!1?m.reduce((z,f)=>z+(+f.price||0),0):null;this.summary={products:m,totalPrice:Q,totalTime:L,locations:k,employee:_,date:S,slot:B}},isAllValid(){var m,k;return Array.isArray(this.summary.products)&&this.summary.products.length>0&&Array.isArray(this.summary.locations)&&this.summary.locations.length>0&&this.summary.employee!==null&&this.summary.date!==null&&((m=this.summary.slot)==null?void 0:m.start)&&((k=this.summary.slot)==null?void 0:k.end)},getError(){return this.products.error||this.locations.error||this.employees.error||this.schedules.error||this.submitData.error||null},handleNextStepClick(m){if(typeof BW_WIDGET_DISPATCH=="function"){const k=this.getStepByKey(this.currentKey);if(!((k==null?void 0:k.ga)||[]).some(S=>S.includes("choose")))return;this.currentKey==="location"&&Be(this.getStepByKey("location"),this.summary),this.currentKey==="service"&&Be(this.getStepByKey("service"),this.summary),this.currentKey==="employee"&&(this.summary.employee&&Be(this.getStepByKey(this.currentKey),this.summary),this.summary.slot&&Be(this.getStepByKey("schedule"),this.summary)),this.currentKey==="schedule"&&this.summary.slot&&Be(this.getStepByKey("schedule"),this.summary)}if(this.isStepCompleted(this.currentKey)){const k=m.target.getRootNode().querySelector("#scrollContainer");this.currentKey==="employee"&&this.summary.date&&this.summary.slot?this.goToStepByKey("submit"):this.currentKey==="location"&&this.summary.employee?this.goToStepByKey("schedule"):this.nextStep(),setTimeout(()=>{k.scrollTo({top:0,behavior:"smooth"})},0)}else this.modal.showToast||(this.modal.toastContent="Select an option to proceed further",this.modal.showToast=!0,setTimeout(()=>{this.modal.showToast=!1},1500))}}}var dr={};(function e(t,n,r,a){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!t.OffscreenCanvas)return!1;var f=new OffscreenCanvas(1,1),u=f.getContext("2d");u.fillRect(0,0,1,1);var A=f.transferToImageBitmap();try{u.createPattern(A,"no-repeat")}catch{return!1}return!0})();function l(){}function c(f){var u=n.exports.Promise,A=u!==void 0?u:t.Promise;return typeof A=="function"?new A(f):(f(l,l),null)}var p=(function(f,u){return{transform:function(A){if(f)return A;if(u.has(A))return u.get(A);var I=new OffscreenCanvas(A.width,A.height),D=I.getContext("2d");return D.drawImage(A,0,0),u.set(A,I),I},clear:function(){u.clear()}}})(o,new Map),y=(function(){var f=Math.floor(16.666666666666668),u,A,I={},D=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(u=function(F){var $=Math.random();return I[$]=requestAnimationFrame(function R(j){D===j||D+f-1<j?(D=j,delete I[$],F()):I[$]=requestAnimationFrame(R)}),$},A=function(F){I[F]&&cancelAnimationFrame(I[F])}):(u=function(F){return setTimeout(F,f)},A=function(F){return clearTimeout(F)}),{frame:u,cancel:A}})(),d=(function(){var f,u,A={};function I(D){function F($,R){D.postMessage({options:$||{},callback:R})}D.init=function(R){var j=R.transferControlToOffscreen();D.postMessage({canvas:j},[j])},D.fire=function(R,j,q){if(u)return F(R,null),u;var J=Math.random().toString(36).slice(2);return u=c(function(G){function Z(ae){ae.data.callback===J&&(delete A[J],D.removeEventListener("message",Z),u=null,p.clear(),q(),G())}D.addEventListener("message",Z),F(R,J),A[J]=Z.bind(null,{data:{callback:J}})}),u},D.reset=function(){D.postMessage({reset:!0});for(var R in A)A[R](),delete A[R]}}return function(){if(f)return f;if(!r&&i){var D=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{f=new Worker(URL.createObjectURL(new Blob([D])))}catch(F){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",F),null}I(f)}return f}})(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(f,u){return u?u(f):f}function x(f){return f!=null}function h(f,u,A){return v(f&&x(f[u])?f[u]:g[u],A)}function E(f){return f<0?0:Math.floor(f)}function T(f,u){return Math.floor(Math.random()*(u-f))+f}function O(f){return parseInt(f,16)}function N(f){return f.map(M)}function M(f){var u=String(f).replace(/[^0-9a-f]/gi,"");return u.length<6&&(u=u[0]+u[0]+u[1]+u[1]+u[2]+u[2]),{r:O(u.substring(0,2)),g:O(u.substring(2,4)),b:O(u.substring(4,6))}}function re(f){var u=h(f,"origin",Object);return u.x=h(u,"x",Number),u.y=h(u,"y",Number),u}function X(f){f.width=document.documentElement.clientWidth,f.height=document.documentElement.clientHeight}function ie(f){var u=f.getBoundingClientRect();f.width=u.width,f.height=u.height}function pe(f){var u=document.createElement("canvas");return u.style.position="fixed",u.style.top="0px",u.style.left="0px",u.style.pointerEvents="none",u.style.zIndex=f,u}function m(f,u,A,I,D,F,$,R,j){f.save(),f.translate(u,A),f.rotate(F),f.scale(I,D),f.arc(0,0,1,$,R,j),f.restore()}function k(f){var u=f.angle*(Math.PI/180),A=f.spread*(Math.PI/180);return{x:f.x,y:f.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:f.startVelocity*.5+Math.random()*f.startVelocity,angle2D:-u+(.5*A-Math.random()*A),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:f.color,shape:f.shape,tick:0,totalTicks:f.ticks,decay:f.decay,drift:f.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:f.gravity*3,ovalScalar:.6,scalar:f.scalar,flat:f.flat}}function _(f,u){u.x+=Math.cos(u.angle2D)*u.velocity+u.drift,u.y+=Math.sin(u.angle2D)*u.velocity+u.gravity,u.velocity*=u.decay,u.flat?(u.wobble=0,u.wobbleX=u.x+10*u.scalar,u.wobbleY=u.y+10*u.scalar,u.tiltSin=0,u.tiltCos=0,u.random=1):(u.wobble+=u.wobbleSpeed,u.wobbleX=u.x+10*u.scalar*Math.cos(u.wobble),u.wobbleY=u.y+10*u.scalar*Math.sin(u.wobble),u.tiltAngle+=.1,u.tiltSin=Math.sin(u.tiltAngle),u.tiltCos=Math.cos(u.tiltAngle),u.random=Math.random()+2);var A=u.tick++/u.totalTicks,I=u.x+u.random*u.tiltCos,D=u.y+u.random*u.tiltSin,F=u.wobbleX+u.random*u.tiltCos,$=u.wobbleY+u.random*u.tiltSin;if(f.fillStyle="rgba("+u.color.r+", "+u.color.g+", "+u.color.b+", "+(1-A)+")",f.beginPath(),s&&u.shape.type==="path"&&typeof u.shape.path=="string"&&Array.isArray(u.shape.matrix))f.fill(Q(u.shape.path,u.shape.matrix,u.x,u.y,Math.abs(F-I)*.1,Math.abs($-D)*.1,Math.PI/10*u.wobble));else if(u.shape.type==="bitmap"){var R=Math.PI/10*u.wobble,j=Math.abs(F-I)*.1,q=Math.abs($-D)*.1,J=u.shape.bitmap.width*u.scalar,G=u.shape.bitmap.height*u.scalar,Z=new DOMMatrix([Math.cos(R)*j,Math.sin(R)*j,-Math.sin(R)*q,Math.cos(R)*q,u.x,u.y]);Z.multiplySelf(new DOMMatrix(u.shape.matrix));var ae=f.createPattern(p.transform(u.shape.bitmap),"no-repeat");ae.setTransform(Z),f.globalAlpha=1-A,f.fillStyle=ae,f.fillRect(u.x-J/2,u.y-G/2,J,G),f.globalAlpha=1}else if(u.shape==="circle")f.ellipse?f.ellipse(u.x,u.y,Math.abs(F-I)*u.ovalScalar,Math.abs($-D)*u.ovalScalar,Math.PI/10*u.wobble,0,2*Math.PI):m(f,u.x,u.y,Math.abs(F-I)*u.ovalScalar,Math.abs($-D)*u.ovalScalar,Math.PI/10*u.wobble,0,2*Math.PI);else if(u.shape==="star")for(var H=Math.PI/2*3,se=4*u.scalar,le=8*u.scalar,he=u.x,ye=u.y,Ce=5,me=Math.PI/Ce;Ce--;)he=u.x+Math.cos(H)*le,ye=u.y+Math.sin(H)*le,f.lineTo(he,ye),H+=me,he=u.x+Math.cos(H)*se,ye=u.y+Math.sin(H)*se,f.lineTo(he,ye),H+=me;else f.moveTo(Math.floor(u.x),Math.floor(u.y)),f.lineTo(Math.floor(u.wobbleX),Math.floor(D)),f.lineTo(Math.floor(F),Math.floor($)),f.lineTo(Math.floor(I),Math.floor(u.wobbleY));return f.closePath(),f.fill(),u.tick<u.totalTicks}function S(f,u,A,I,D){var F=u.slice(),$=f.getContext("2d"),R,j,q=c(function(J){function G(){R=j=null,$.clearRect(0,0,I.width,I.height),p.clear(),D(),J()}function Z(){r&&!(I.width===a.width&&I.height===a.height)&&(I.width=f.width=a.width,I.height=f.height=a.height),!I.width&&!I.height&&(A(f),I.width=f.width,I.height=f.height),$.clearRect(0,0,I.width,I.height),F=F.filter(function(ae){return _($,ae)}),F.length?R=y.frame(Z):G()}R=y.frame(Z),j=G});return{addFettis:function(J){return F=F.concat(J),q},canvas:f,promise:q,reset:function(){R&&y.cancel(R),j&&j()}}}function B(f,u){var A=!f,I=!!h(u||{},"resize"),D=!1,F=h(u,"disableForReducedMotion",Boolean),$=i&&!!h(u||{},"useWorker"),R=$?d():null,j=A?X:ie,q=f&&R?!!f.__confetti_initialized:!1,J=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,G;function Z(H,se,le){for(var he=h(H,"particleCount",E),ye=h(H,"angle",Number),Ce=h(H,"spread",Number),me=h(H,"startVelocity",Number),kt=h(H,"decay",Number),Nd=h(H,"gravity",Number),$d=h(H,"drift",Number),ji=h(H,"colors",N),jd=h(H,"ticks",Number),Li=h(H,"shapes"),Ld=h(H,"scalar"),zd=!!h(H,"flat"),zi=re(H),Hi=he,pr=[],Hd=f.width*zi.x,Wd=f.height*zi.y;Hi--;)pr.push(k({x:Hd,y:Wd,angle:ye,spread:Ce,startVelocity:me,color:ji[Hi%ji.length],shape:Li[T(0,Li.length)],ticks:jd,decay:kt,gravity:Nd,drift:$d,scalar:Ld,flat:zd}));return G?G.addFettis(pr):(G=S(f,pr,j,se,le),G.promise)}function ae(H){var se=F||h(H,"disableForReducedMotion",Boolean),le=h(H,"zIndex",Number);if(se&&J)return c(function(me){me()});A&&G?f=G.canvas:A&&!f&&(f=pe(le),document.body.appendChild(f)),I&&!q&&j(f);var he={width:f.width,height:f.height};R&&!q&&R.init(f),q=!0,R&&(f.__confetti_initialized=!0);function ye(){if(R){var me={getBoundingClientRect:function(){if(!A)return f.getBoundingClientRect()}};j(me),R.postMessage({resize:{width:me.width,height:me.height}});return}he.width=he.height=null}function Ce(){G=null,I&&(D=!1,t.removeEventListener("resize",ye)),A&&f&&(document.body.contains(f)&&document.body.removeChild(f),f=null,q=!1)}return I&&!D&&(D=!0,t.addEventListener("resize",ye,!1)),R?R.fire(H,he,Ce):Z(H,he,Ce)}return ae.reset=function(){R&&R.reset(),G&&G.reset()},ae}var L;function W(){return L||(L=B(null,{useWorker:!0,resize:!0})),L}function Q(f,u,A,I,D,F,$){var R=new Path2D(f),j=new Path2D;j.addPath(R,new DOMMatrix(u));var q=new Path2D;return q.addPath(j,new DOMMatrix([Math.cos($)*D,Math.sin($)*D,-Math.sin($)*F,Math.cos($)*F,A,I])),q}function U(f){if(!s)throw new Error("path confetti are not supported in this browser");var u,A;typeof f=="string"?u=f:(u=f.path,A=f.matrix);var I=new Path2D(u),D=document.createElement("canvas"),F=D.getContext("2d");if(!A){for(var $=1e3,R=$,j=$,q=0,J=0,G,Z,ae=0;ae<$;ae+=2)for(var H=0;H<$;H+=2)F.isPointInPath(I,ae,H,"nonzero")&&(R=Math.min(R,ae),j=Math.min(j,H),q=Math.max(q,ae),J=Math.max(J,H));G=q-R,Z=J-j;var se=10,le=Math.min(se/G,se/Z);A=[le,0,0,le,-Math.round(G/2+R)*le,-Math.round(Z/2+j)*le]}return{type:"path",path:u,matrix:A}}function z(f){var u,A=1,I="#000000",D='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof f=="string"?u=f:(u=f.text,A="scalar"in f?f.scalar:A,D="fontFamily"in f?f.fontFamily:D,I="color"in f?f.color:I);var F=10*A,$=""+F+"px "+D,R=new OffscreenCanvas(F,F),j=R.getContext("2d");j.font=$;var q=j.measureText(u),J=Math.ceil(q.actualBoundingBoxRight+q.actualBoundingBoxLeft),G=Math.ceil(q.actualBoundingBoxAscent+q.actualBoundingBoxDescent),Z=2,ae=q.actualBoundingBoxLeft+Z,H=q.actualBoundingBoxAscent+Z;J+=Z+Z,G+=Z+Z,R=new OffscreenCanvas(J,G),j=R.getContext("2d"),j.font=$,j.fillStyle=I,j.fillText(u,ae,H);var se=1/A;return{type:"bitmap",bitmap:R.transferToImageBitmap(),matrix:[se,0,0,se,-J*se/2,-G*se/2]}}n.exports=function(){return W().apply(this,arguments)},n.exports.reset=function(){W().reset()},n.exports.create=B,n.exports.shapeFromPath=U,n.exports.shapeFromText=z})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),dr,!1);const Td=dr.exports;dr.exports.create;const ur=document.createElement("canvas");document.body.appendChild(ur),Object.assign(ur.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"99999999"});const Md=Td.create(ur,{resize:!0,useWorker:!0}),Id=200,Rd={origin:{y:.7}};function bt(e,t){Md({...Rd,...t,particleCount:Math.floor(Id*e)})}const Od=()=>{bt(.25,{spread:26,startVelocity:55}),bt(.2,{spread:60}),bt(.35,{spread:100,decay:.91,scalar:.8}),bt(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),bt(.1,{spread:120,startVelocity:45})};function Dd(e){var p,y,d,g,v,x,h,E,T;const t=((p=e.colors)==null?void 0:p.primary)??"#5c7cfa",n=((y=e.colors)==null?void 0:y.secondary)??ed(t,(d=e.colors)==null?void 0:d.dimmed),r=((g=e.colors)==null?void 0:g.third)??td(t,(v=e.colors)==null?void 0:v.dimmed),a=((x=e.textColors)==null?void 0:x.primary)??Qt(t),i=((h=e.textColors)==null?void 0:h.secondary)??Qt(n),s=((E=e.textColors)==null?void 0:E.third)??Qt(r),o=((T=e.colors)==null?void 0:T.iconBackground)??t,l=Qt(o)??a;return[...sr("primary",ir(t)),...sr("secondary",ir(n)),...sr("tertiary",ir(r)),{"--color-body-100":a},{"--color-body-200":i},{"--color-body-300":s},{"--color-toggle-100":l},{"--color-toggle-200":o},{"--image-filter":a==="#ffffff"?"brightness(0) invert(1)":""}]}const Bd=(e,t)=>{t.forEach(n=>{e.style.setProperty(Object.keys(n).at(0),Object.values(n).at(0))})},Fd=e=>`
  <div
    :style="\`font-family: \${$store.theme.fontFamily};\`"
    x-data="widgetState"
    x-effect="updateSummary()"
    data-test-widget-root="true"
  >
    
    <div @keydown.escape.window="modal.close()" class="relative z-[9999999] w-auto h-auto">
    
      <button
        x-show="modal.showToggler && (modal.icon || modal.text)"
        @click="modal.open()"
        aria-label="Open modal"
        class="flex items-center justify-center gap-2 fixed bottom-10 right-10 active:outline-0 hover:animation-none cursor-pointer shadow-2xl shadow-primary-500 bg-toggle-200 text-toggle-100 transition-all duration-300"
        :class="[
          modal.animateToggler ? 'animate-bounce' : '',
          modal.text ? 'px-6 py-3 rounded-full' : 'w-16 h-16 rounded-full'
        ]"
      >
        <i x-show="modal.icon" :class="modal.icon + ' text-xl'"></i>
        <template x-if="modal.text">
          <span class="font-medium" x-text="modal.text"></span>
        </template>
      </button>

      <div>
        <div x-show="modal.status" style="font-family:\${$store.theme.fontFamily};"
          class="@container fixed top-0 left-0 z-[9999999] flex justify-center w-screen"
          :class="$store.viewport.isMobile ? 'items-start h-dvh' : 'items-center h-screen'" x-cloak tabindex="-1">
          
          <div x-show="modal.status"
            x-transition:enter="ease-out duration-300"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="ease-in duration-300"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            @click="modal.close()"
            class="absolute inset-0 w-full h-full bg-black/10 backdrop-blur-2xl">
          </div>

          ${e}

        </div>
      </div>
    </div>
  </div>`;function Pd(e){return`
  <div
    class="@container"
    x-data="widgetState"
    :style="\`font-family: \${$store.theme.fontFamily};\`"
    x-effect="updateSummary()"
    data-test-widget-root="true"
  >
    ${e}
  </div>
  `}async function tn(e={}){var U,z,f,u,A,I,D,F,$,R,j,q,J,G,Z,ae,H,se;const t=Object.assign({},window.BW_WIDGET_CONFIG||{},e),r=new URLSearchParams(location.search).get("bw_id");let{id:a,name:i,attributes:s,trackEvents:o,debug:l}=t;r&&(a=r),o||(o={}),b.info({scope:"INIT",message:"init called",data:{typeHint:t.forceModal?"MODAL":"AUTO",containerId:t.containerId||"bw-widget"}});let c=Fi("bw-referrer");c||(c=document.referrer,Bi("bw-referrer",c));let p=Fi("bw-firstvisit");p||(p=window.location.href,Bi("bw-firstvisit",p));let y={referrer:c,first_visit:p};if(y.variant_name=i||null,y.attributes=s||null,window.BW_DEBUG_MODE=!!l,!a)throw new Error("Failed to load widget. Please set window.BW_WIDGET_CONFIG.id = 'YOUR_ID'");const d=t.containerId||"bw-widget",g=document.getElementById(d),v=!!g&&!t.forceModal,x=v?g:document.body,h=v?"INPAGE":"MODAL",E=new URLSearchParams(location.search).get("bw_api"),T=t.apiBaseURL;let O=null;try{O=localStorage.getItem("bw-api-base")}catch{}const N=T||E||O;N&&(Yc(N),b.info({scope:"FETCH",message:"API base URL set",data:{baseURL:N}})),b.info({scope:"FETCH",message:"API base URL sources",data:{qsBase:E,cfgBase:T,lsBase:typeof O=="string"}});const M=await Xc({id:a,additionalInfoForRequest:y});if(b.success({scope:"INIT",message:"Config loaded",data:{uuid:(U=M==null?void 0:M.identifier)==null?void 0:U.uuid,orgLocale:(z=M==null?void 0:M.organization)==null?void 0:z.locale,currency:(f=M==null?void 0:M.organization)==null?void 0:f.currency}}),window.Alpine=window.Alpine||xe,window.__BW_ALPINE_STARTED__||(xe.start(),b.info({scope:"ALPINE",message:"Alpine started"}),window.__BW_ALPINE_STARTED__=!0),!window.__BW_STORES_INIT__){const le=((t==null?void 0:t.weekStart)||"monday").toLowerCase();xe.data("datePicker",vd.bind(this,((A=(u=M.organization)==null?void 0:u.locale)==null?void 0:A.replace("_","-"))||"en-US",{weekStart:le})),xe.store("utils",{formatDuration:Qc,showConfetti:Od,generateForm:nd.bind(this,M.steps.submit.fields),extractHourMinute:ad,formatCurrency:id.bind(this,((D=(I=M.organization)==null?void 0:I.locale)==null?void 0:D.replace("_","-"))||"en-US",((F=M.organization)==null?void 0:F.currency)||"USD"),generateGoogleCalendarLink:sd,generateGoogleMapsLink:od,formatReadableDate:dd.bind(this,((R=($=M.organization)==null?void 0:$.locale)==null?void 0:R.replace("_","-"))||"en-US")}),xe.store("i18n",{t:wd((j=M.organization)==null?void 0:j.locale,t==null?void 0:t.i18n)}),xe.store("theme",{radius:`rounded-${((q=M.ui)==null?void 0:q.borderRadius)??"xl"}`,fontFamily:((J=M.ui)==null?void 0:J.fontFamily)??"Segoe UI"}),xe.store("viewport",{deviceType:or(),get isMobile(){return this.deviceType==="mobile"},get isTablet(){return this.deviceType==="tablet"},get isDesktop(){return this.deviceType==="desktop"}}),b.info({scope:"VIEWPORT",message:"Viewport store initialized",data:{deviceType:xe.store("viewport").deviceType,width:window.innerWidth}});const he=()=>{const Ce=xe.store("viewport"),me=Ce.deviceType,kt=or();me!==kt&&b.info({scope:"VIEWPORT",message:"Device type changed",data:{from:me,to:kt,width:window.innerWidth}}),Ce.deviceType=kt};he();const ye=en(he,200);window.addEventListener("resize",ye),window.addEventListener("orientationchange",ye),b.info({scope:"ALPINE",message:"Alpine stores initialized"}),window.__BW_STORES_INIT__=!0}const re=h==="INPAGE"?Pd(hr):Fd(hr),X=document.createElement("div"),ie=X.attachShadow({mode:"open"});Bd(ie.host,Dd(M.ui)),b.info({scope:"THEME",message:"Theme applied",data:{radius:`rounded-${((G=M.ui)==null?void 0:G.borderRadius)??"xl"}`,font:((Z=M.ui)==null?void 0:Z.fontFamily)??"Segoe UI"}});const pe=document.createElement("style");pe.textContent=Ki;const m=document.createElement("div");m.innerHTML=re,ie.appendChild(pe);const k=document.createElement("style"),_={xs:12,sm:14,base:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36},S=Number(((ae=M.ui)==null?void 0:ae.fontScale)??1),B=((H=M.ui)==null?void 0:H.fontSizes)??{},L=le=>Math.round((B[le]??_[le])*(isFinite(S)?S:1));k.textContent=`
    :host {
      /* Tailwind spacing unit (1 = 4px) */
      --spacing: 4px;

      /* Typography sizes (overridable via ui.fontScale and ui.fontSizes) */
      --text-xs: ${L("xs")}px;
      --text-sm: ${L("sm")}px;
      --text-base: ${L("base")}px;
      --text-lg: ${L("lg")}px;
      --text-xl: ${L("xl")}px;
      --text-2xl: ${L("2xl")}px;
      --text-3xl: ${L("3xl")}px;
      --text-4xl: ${L("4xl")}px;

      /* Border radii */
      --radius-sm: 4px;
      --radius-md: 6px;
      --radius-lg: 8px;
      --radius-xl: 12px;
      --radius-2xl: 16px;
      --radius-3xl: 24px;
      --radius-4xl: 32px;

      /* Container width used by max-w-7xl */
      --container-7xl: 1280px;
    }
  `,ie.appendChild(k),ie.appendChild(m),Di(M.injection,ie),b.info({scope:"INJECT",message:"Custom HTML injected"}),pd((se=M.generel)==null?void 0:se.analytics),b.info({scope:"ANALYTICS",message:"Analytics script requested insert"}),Di({head:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">'},ie),h==="INPAGE"&&(x.innerHTML=""),x.appendChild(X),b.success({scope:"RENDER",message:"Widget host attached",data:{type:h,isInline:v}});const W=t.instanceKey||`i${Date.now()}_${Math.random().toString(36).slice(2,7)}`;xe.data("widgetState",()=>Cd(a,h,M,o,y,{container:g,instanceKey:W})),xe.initTree(ie),b.success({scope:"ALPINE",message:"Alpine tree initialized"}),v&&t.inlineAlsoShowModalTrigger===!0&&!t.__spawnedByInline&&setTimeout(()=>{b.info({scope:"WIDGET",message:"Spawning modal trigger alongside inline",data:{spawnedKey:`${W}_modal`}}),tn({...t,forceModal:!0,inlineAlsoShowModalTrigger:!1,instanceKey:`${W}_modal`,__spawnedByInline:!0})},0),b.info(K.widgetInit()),b.info({scope:"WIDGET",message:"Dispatching bwWidgetInit"});const Q=new CustomEvent("bwWidgetInit",{detail:{message:"BW Widget has loaded"}});window.dispatchEvent(Q)}return typeof window<"u"&&(window.BookingWidget=window.BookingWidget||{},window.BookingWidget.init=tn,window.BW_WIDGET_CONFIG&&window.BW_WIDGET_CONFIG.autoInit!==!1&&tn(window.BW_WIDGET_CONFIG)),nn.init=tn,Object.defineProperty(nn,Symbol.toStringTag,{value:"Module"}),nn})({});
