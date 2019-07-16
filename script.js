const rand = (min, max) => Math.floor((Math.random() * max) + min)
const make = (text, color) => {
    const el = document.createElement('div')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = text
    el.classList.add('word', color)
    el.appendChild(wrapper)
    wrapper.classList.add('wrapper')
    return el
}
const shuffle = array => {
    let counter = array.length;
    while (counter > 0) {
        let index = rand(0, counter)
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

const sample = (array, count) => {
    const indexes = []
    while (indexes.length < count) {
        let num = rand(0, array.length - 1)
        if (indexes.includes(num)) {
            continue;
        }
        indexes.push(num)
    }
    return array.filter((v, i) => indexes.includes(i))
}

const pad = (txt, len) => (' '.repeat(len) + txt).slice(-len)

const hashvar = key => {
    const item = window.location.hash.substr(1)
        .split('&')
        .map(s => s.split('=', 2))
        .find(el => el[0] === key)
    return item ? decodeURIComponent(item[1]) : null
}

const limit = (conf, key) => {
    let l = 0
    for (let k of Object.keys(conf)) {
        l += conf[k].count
        if (k === key) {
            return l
        }
    }
    return l
}

const total = conf => {
    let l = 0
    for (let k of Object.keys(conf)) {
        l += conf[k].count
    }
    return l
}

const start = (words, conf) => {
    let longest = 0
    const shuffled = shuffle(sample(words, total(conf)).map((word, i) => {
        longest = Math.max(longest, word.length)
        for (let k of Object.keys(conf)) {
            if (i < limit(conf, k)) {
                return {type: k, text: word};
            }
        }
    }))
    longest += 2 // padding

    const gameEl = document.getElementById('game')

    const msgs = []
    const clrs = []
    shuffled.forEach(item => {
        const el = make(item.text, item.type)
        gameEl.appendChild(el)
        el.onclick = (ev) => {
            ev.currentTarget.classList.add('revealed')
        }

        msgs.push(`%c${pad(item.text, longest)}${(msgs.length + 1) % 5 ? '' : '\n'}`)
        clrs.push(`color: ${conf[item.type].color}`)
    })
    console.log(msgs.join(''), ...clrs);
}

fetch(hashvar('words') || 'words1.txt')
    .then(response => response.text())
    .then(text => text.split('\n'))
    .then(words => {
        start(words, {
            bad: {color: '#3f3e37', count: 1},
            own: {color: '#107fa6', count: 8},
            enemy: {color: '#e73c3f', count: 9},
            neutral: {color: '#a1856e', count: 7},
        })
    })
