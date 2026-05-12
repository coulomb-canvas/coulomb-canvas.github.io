---
subid: ft
title: The Fourier Transform
topic: maths2
---

### Fourier Series

The fourier series is an old friend of ours, which allows us to take an ugly function and rewrite it in terms of a large sum of sines and cosines.

Let's say you are making jollof rice. 

Trying to map out exactly which atoms and which molecules go where would take a long long *long* time, and overall wouldn't be very practical.

However, if instead I tell you how much of each ingredient you need to add to make my jollof rice

<div class=eqn> \[ f(x) = \sum^\infty_{n=0} A_n F_n(x)  \] </div>

The \\( A_n \\) is the amount, and the \\( F_n(x) \\) is the ingredient, or function in this case. 

Hopefully you remember what we used last time: sine waves and cosine waves.

The orthonormality condition

<div class=eqn> \[ \int_{x_0}^{x_1} F_m^*(x) F_n(x) \, dx = \delta_{nm}  \] </div>

This might seem like a scary equation but it respresents something quite simple. 

<div class=eqn> \[ A_n = \int_{x_0}^{x_1} F_m^*(x) f(x) \, dx  \] </div>

Think of the Kronecker delta as a kind of security guard. Go back to my jollof rice example, and let's say I have a list of ingredients which one needs to make it, but I'm not gonna share it with you, because I'm stingy. However, the Kronecker Delta is a good friend of mine, so she can have the recipe.

You go to the Kronecker Delta and ask her if there are tomatoes in the recipe. She then pulls out a form with this written on it:

<div class=eqn> \[ F_m^*(x) = \text{_______}  \] </div>

You then take the form and write in the ingredient you want.

<div class=eqn> \[ F_m^*(x) = \text{tomatoes}  \] </div>

KD then looks at that particular part of the recipe. If there are any tomatoes, she comes back with a green flag (i.e. a 1). But if there are none, she returns with a red flag (i.e. a 0).

Of course you could cheat, and have KD check if there

...

Also remember we can represent sines and cosines using exponentials:

<div class=eqn> \[ f(x) = \sum^{+\infty}_{n=-\infty} C_n e^{ik_nx}  \] </div>

But there is one slight problem. The fourier series is designed to approximate a *repeating function*. So every \\( 2L \\) interval, the function will repeat.

But this isn't always what we want. What if we want only one rendition (i.e. an *infinite interval*)? Something like a single clap.

### Fourier Transform

<div class=eqn> \[ C(k) = \frac{1}{L} \int_{-L/2}^{L/2} f(x) \, e^{-ikx} \, dx \ .  \] </div>

Also

<div class=eqn> \[ \Delta k = \frac{2\pi}L  \] </div>

As the length becomes infinite, the wavenumber \\( k \\) becomes smaller and smaller, until it becomes practically 0. At that point, our fourier series no longer becomes a simple series, but now a continuous function.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align*}
            \tilde{f}(k) &= \mathcal{F}(f(x)) \\[6pt] &= \int_{-\infty}^{+\infty} f(x) \, e^{-ikx} \, dx \end{align*}\] <hr>\[
            \begin{align*}f(x) &= \mathcal{F}^{-1}(\tilde{f}(k)) \\[6pt] &= \frac{1}{2\pi} \int_{-\infty}^{+\infty} \tilde{f}(k) \, e^{ikx} \, dk \ .
            \end{align*} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Fourier Transform
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Hey, cool letter! That's the /mathcal{F}!

So what does this fourier transform do for us, you ask?

Think of yourself like a superhero, with the special ability called "F-Vision". This is the ability to see spirits which aren't visible to the physical eye. The physical realm represents the function in real space (\\( f(x) \\)), and the spiritual realm represents the frequency space (\\( \\tilde{f}(k) \\)).

Here are some examples:

#### Example 1: f(x) = 1

There is a big wall

***F-Vision: Activate!!***

<div class=eqn> \[ \begin{align*}
    \tilde{f}(k) &= \int_{-\infty}^{+\infty} f(x)e^{-ikx} \\[6pt] &= \int_{-\infty}^{+\infty} e^{-ikx} \, dx \\[6pt] &= 2\pi \, \frac{1}{2\pi} \int_{-\infty}^{+\infty} e^{-i(k-0)x} \, dx \\[6pt] &= 2\pi \, \delta(k) \ . 
 \end{align*} \] </div>

 ### Properties of the Fourier transform

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \mathcal{F}(af(x) + bg(x)) = a \mathcal{F}(f(x)) + b \mathcal{F}(g(x)) \ .  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \mathcal{F}(f(x+a)) = e^{ika} \mathcal{F}(f(x)) .  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \mathcal{F}(\frac{d^nf}{dx^n}) = (ik)^n \mathcal{F}(f(x,t)) .  \]
            \[ \mathcal{F}(\frac{d^nf}{dt^n}) = (i\omega)^n \mathcal{F}(f(x,t)) .  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Parseval's theorem

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \int_{-\infty}^{+\infty} |u(x)|^2 \, dx = \frac{1}{2\pi} \int_{-\infty}^{+\infty} |\tilde{u}(k)|^2 \, dk \ .  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class=eqn> \[ \int_{-\infty}^{+\infty} f^*(x) g(x) \, dx = \frac{1}{2\pi} \int_{-\infty}^{+\infty} \tilde{f}^*(k) \tilde{g}(k) \, dk \ , \] </div>

### Convolution

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ f * g(x) = \int_{-\infty}^{+\infty} f(y) g(x - y) \, dy \ .  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \mathcal{F}(f * g(x)) = \mathcal{F}(f(x)) \mathcal{F}(g(x)) = \tilde{f}(k) \tilde{g}(k) .  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



