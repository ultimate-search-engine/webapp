export function theme_changer(props: any) {

    const themef = document.querySelector(':root')

    const themes = {
        light: {
            bg: 'rgba(255, 255, 255, 1)',
            header_bg: 'rgba(255, 255, 255, 1)',
            results_bg: 'rgba(255, 255, 255, 1)',
            results_h: 'rgba(20, 20, 20, 1)',
            results_p: 'rgba(80, 80, 80, 1)',
            results_l: 'rgba(10, 50, 200, 1)',
            results_sec: 'rgba(240, 240, 240, 1)',
            results_high: 'rgba(10, 100, 200, 1)',
            border_big: 'rgba(220, 220, 220, 1)',
            suggest_hover: 'rgba(240, 240, 240, 1)',
            svg: 'invert(0)'
        },
        grey: {
            bg: 'rgba(60, 60, 60, 1)',
            header_bg: 'rgba(40, 40, 40, 1)',
            results_bg: 'rgba(40, 40, 40, 1)',
            results_h: 'rgba(220, 220, 220, 1)',
            results_p: 'rgba(180, 180, 180, 1)',
            results_l: 'rgba(10, 150, 255, 1)',
            results_sec: 'rgba(50, 50, 50, 1)',
            results_high: 'rgba(10, 100, 200, 1)',
            border_big: 'rgba(70, 70, 70, 1)',
            suggest_hover: 'rgba(70, 70, 70, 1)',
            svg: 'invert(1)'
        },
        dark: {
            bg: 'rgba(10, 10, 10, 1)',
            header_bg: 'rgba(20, 20, 20, 1)',
            results_bg: 'rgba(20, 20, 20, 1)',
            results_h: 'rgba(220, 220, 220, 1)',
            results_p: 'rgba(180, 180, 180, 1)',
            results_l: 'rgba(10, 150, 255, 1)',
            results_sec: 'rgba(40, 40, 40, 1)',
            results_high: 'rgba(10, 100, 200, 1)',
            border_big: 'rgba(70, 70, 70, 1)',
            suggest_hover: 'rgba(40, 40, 40, 1)',
            svg: 'invert(1)'
        },
        blue: {
            bg: 'rgba(0, 5, 10, 1)',
            header_bg: 'rgba(0, 10, 20, 1)',
            results_bg: 'rgba(0, 10, 20, 1)',
            results_h: 'rgba(180, 180, 180, 1)',
            results_p: 'rgba(120, 120, 120, 1)',
            results_l: 'rgba(100, 200, 200, 1)',
            results_sec: 'rgba(0, 20, 40, 1)',
            results_high: 'rgba(100, 200, 200, 1)',
            border_big: 'rgba(0, 30, 70, 1)',
            suggest_hover: 'rgba(0, 20, 50, 1)',
            svg: 'invert(.8)'
        },
        green: {
            bg: 'rgba(0, 10, 5, 1)',
            header_bg: 'rgba(0, 20, 10, 1)',
            results_bg: 'rgba(0, 20, 10, 1)',
            results_h: 'rgba(180, 180, 180, 1)',
            results_p: 'rgba(120, 120, 120, 1)',
            results_l: 'rgba(50, 150, 100, 1)',
            results_sec: 'rgba(0, 30, 10, 1)',
            results_high: 'rgba(50, 150, 100, 1)',
            border_big: 'rgba(0, 70, 30, 1)',
            suggest_hover: 'rgba(0, 50, 20, 1)',
            svg: 'invert(.8)',
        },
        red: {
            bg: 'rgba(10, 2, 2, 1)',
            header_bg: 'rgba(20, 5, 5, 1)',
            results_bg: 'rgba(20, 5, 5, 1)',
            results_h: 'rgba(180, 180, 180, 1)',
            results_p: 'rgba(120, 120, 120, 1)',
            results_l: 'rgba(200, 50, 50, 1)',
            results_sec: 'rgba(40, 0, 0, 1)',
            results_high: 'rgba(200, 50, 50, 1)',
            border_big: 'rgba(70, 10, 20, 1)',
            suggest_hover: 'rgba(50, 20, 20, 1)',
            svg: 'invert(.8)',
        }
    }

    localStorage.setItem("theme", props)
    let temp = eval(`themes.${props}`)
    if (themef) {
        for (const property in temp) {
            // @ts-ignore
            themef.style.setProperty(`--theme_${property}`, temp[property])
        }
    }
}
