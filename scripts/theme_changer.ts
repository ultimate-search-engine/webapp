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
        }
    }

    localStorage.setItem("theme", props)
    let temp = eval(`themes.${props}`)
    if (themef) {
        for (const property in temp) {
            console.log(`${property}: ${temp[property]}`);
            // @ts-ignore
            themef.style.setProperty(`--theme_${property}`, temp[property])
        }
    }
}
