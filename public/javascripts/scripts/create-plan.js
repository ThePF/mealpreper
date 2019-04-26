//background colors//

const bgcolor1 = document.getElementById("cp-bgcolor1")
const bgcolor2 = document.getElementById("cp-bgcolor2")
const bgcolor3 = document.getElementById("cp-bgcolor3")
const bgcolor4 = document.getElementById("cp-bgcolor4")
const bgcolor5 = document.getElementById("cp-bgcolor5")
const bgcolor6 = document.getElementById("cp-bgcolor6")
const bgcolor7 = document.getElementById("cp-bgcolor7") // new ones below
const bgcolor8 = document.getElementById("cp-bgcolor8")
const bgcolor9 = document.getElementById("cp-bgcolor9")

const bgcurrentColor = document.getElementById("cp-backgroundofplan")

bgcolor1 &&
    bgcolor1.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor1).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor2 &&
    bgcolor2.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor2).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor3 &&
    bgcolor3.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor3).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor4 &&
    bgcolor4.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor4).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor5 &&
    bgcolor5.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor5).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor6 &&
    bgcolor6.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor6).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor7 &&
    bgcolor7.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor7).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor8 &&
    bgcolor8.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor8).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })
bgcolor9 &&
    bgcolor9.addEventListener("click", function() {
        const value = window.getComputedStyle(bgcolor9).getPropertyValue("background-color")
        bgcurrentColor.style.backgroundColor = value
    })

//weekday colors//

const wdcolor1 = document.getElementById("cp-wdcolor1")
const wdcolor2 = document.getElementById("cp-wdcolor2")
const wdcolor3 = document.getElementById("cp-wdcolor3")
const wdcolor4 = document.getElementById("cp-wdcolor4")
const wdcolor5 = document.getElementById("cp-wdcolor5")
const wdcolor6 = document.getElementById("cp-wdcolor6")
const wdcolor7 = document.getElementById("cp-wdcolor7")
const wdcolor8 = document.getElementById("cp-wdcolor8")
const wdcolor9 = document.getElementById("cp-wdcolor9")

const wdcurrentColor = document.getElementsByClassName("cp-weekday")

wdcolor1 &&
    wdcolor1.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor1).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor2 &&
    wdcolor2.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor2).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor3 &&
    wdcolor3.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor3).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor4 &&
    wdcolor4.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor4).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor5 &&
    wdcolor5.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor5).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor6 &&
    wdcolor6.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor6).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor7 &&
    wdcolor7.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor7).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor8 &&
    wdcolor8.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor8).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })

wdcolor9 &&
    wdcolor9.addEventListener("click", function() {
        const value = window.getComputedStyle(wdcolor9).getPropertyValue("background-color")
        document.querySelectorAll(".cp-weekday").forEach(th => (th.style.backgroundColor = value))
    })
