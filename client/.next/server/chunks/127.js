"use strict";
exports.id = 127;
exports.ids = [127];
exports.modules = {

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FormField = ({ label , name , type , placeholder , value , handleChange , isSurpriseMe , handleSurpriseMe  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: name,
                        className: "block text-sm font-medium text-gray-900",
                        children: label
                    }),
                    isSurpriseMe && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: handleSurpriseMe,
                        className: "font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black",
                        children: "Surprise me"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: type,
                id: name,
                name: name,
                placeholder: placeholder,
                value: value,
                onChange: handleChange,
                required: true,
                className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormField);


/***/ }),

/***/ 4174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Loader = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: "status",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            "aria-hidden": "true",
            className: "inline w-10 h-10 mr-2 text-gray-200 animate-spin fill-[#6469ff]",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill"
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ downloadImage),
  "P": () => (/* binding */ getRandomPrompot)
});

;// CONCATENATED MODULE: ./constants/index.js
const surpriseMePrompts = [
    "an armchair in the shape of an avocado",
    "a surrealist dream-like oil painting by Salvador Dal\xed of a cat playing checkers",
    "teddy bears shopping for groceries in Japan, ukiyo-e",
    "an oil painting by Matisse of a humanoid robot playing chess",
    "panda mad scientist mixing sparkling chemicals, digital art",
    "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art",
    "3D render of a cute tropical fish in an aquarium on a dark blue background, digital art",
    "an astronaut lounging in a tropical resort in space, vaporwave",
    "an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background",
    "a stained glass window depicting a hamburger and french fries",
    "a pencil and watercolor drawing of a bright city in the future with flying cars",
    "a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art",
    "a fortune-telling shiba inu reading your fate in a giant hamburger, digital art",
    '"a sea otter with a pearl earring" by Johannes Vermeer',
    "an oil pastel drawing of an annoyed cat in a spaceship",
    "a painting of a fox in the style of Starry Night",
    "a bowl of soup that looks like a monster, knitted out of wool",
    "A plush toy robot sitting against a yellow wall",
    "A synthwave style sunset above the reflecting water of the sea, digital art",
    "Two futuristic towers with a skybridge covered in lush foliage, digital art",
    "A 3D render of a rainbow colored hot air balloon flying above a reflective lake",
    "A comic book cover of a superhero wearing headphones",
    "A centered explosion of colorful powder on a black background",
    "A photo of a Samoyed dog with its tongue out hugging a white Siamese cat",
    "A photo of a white fur monster standing in a purple room",
    "A photo of Michelangelo's sculpture of David wearing headphones djing",
    "A Samurai riding a Horse on Mars, lomography.",
    "A modern, sleek Cadillac drives along the Gardiner expressway with downtown Toronto in the background, with a lens flare, 50mm photography",
    "A realistic photograph of a young woman with blue eyes and blonde hair",
    "A man standing in front of a stargate to another dimension",
    "Spongebob Squarepants in the Blair Witch Project",
    "A velociraptor working at a hotdog stand, lomography",
    "A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens",
    "A BBQ that is alive, in the style of a Pixar animated movie",
    "A futuristic cyborg dance club, neon lights",
    "The long-lost Star Wars 1990 Japanese Anime",
    "A hamburger in the shape of a Rubik’s cube, professional food photography",
    "A Synthwave Hedgehog, Blade Runner Cyberpunk",
    "An astronaut encountering an alien life form on a distant planet, photography",
    "A Dinosaur exploring Cape Town, photography",
    "A Man falling in Love with his Computer, digital art",
    "A photograph of a cyborg exploring Tokyo at night, lomography",
    "Dracula walking down the street of New York City in the 1920s, black and white photography",
    "Synthwave aeroplane",
    "A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm",
    "A Space Shuttle flying above Cape Town, digital art"
];

// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__(8109);
var external_file_saver_default = /*#__PURE__*/__webpack_require__.n(external_file_saver_);
;// CONCATENATED MODULE: ./utils/index.js


const getRandomPrompot = (prompt)=>{
    console.log(prompt);
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    if (randomPrompt === prompt) return getRandomPrompot(prompt);
    return randomPrompt;
};
async function downloadImage(_id, photo) {
    external_file_saver_default().saveAs(photo, `download-${_id}.jpg`);
}


/***/ })

};
;