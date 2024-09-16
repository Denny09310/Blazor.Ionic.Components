Object.assign(window, {}, {
    Ionic: {
        __interop: {
            transition: async (options) => {
                const enteringEl = document.querySelector(".entering-view")
                const leavingEl = document.querySelector(".leaving-view")

                // TODO: Find a way to access transition() function from ionic
                // https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/transition/index.ts#L21
            }
        }
    }
})
