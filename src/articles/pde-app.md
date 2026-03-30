---
subid: pde-app
title: Applications of PDEs
topic: maths2
---


### The diffusion equation

<div class=eqn> \[ c = \frac{ \Delta N }{ \Delta x} \] </div>

<div class=eqn> \[ N(t) = \int_0^L c(t, x) \; dx \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ j(x) = -D \frac{ \partial c}{ \partial x} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Fick's (first) law
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

...where \\(D\\) is the *diffusion coefficient*.

<div class=eqn> \[ \frac{ \partial c}{ \partial t} = \frac{ \partial }{ \partial x} \left[ D(x) \frac{ \partial c}{ \partial x} \right] \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{ \partial c}{ \partial t} = D \frac{ \partial^2 c}{ \partial x^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: The Diffusion Equation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


<div class=eqn> \[ \frac{ \partial c}{ \partial t} = D \frac{ \partial^2 c}{ \partial x^2} + S(t, x) \] </div>

### The Wave Equation

Here's a familiar face. The wave equation.

We have a wave, with it's displacement, \\( \\xi (x, t) \\).

And by the way, just for clarification, yes, this is the same thing as \\(U(x, t) \\) which we had when we were learning about waves the first time. I... have no clue why they've chosen to replace \\(U(x, t) \\) with \\( \\xi (x, t) \\). But Xi is a cool looking letter, even if it's a bit of a pain in the bum to write. But I'm not writing it, I'm typing, and typing "\\\\xi" isn't as difficult.

Firstly, let's assume that this wave is relatively flat. So as you go along the \\(x\\)-axis, the displacement \\( \\xi (x, t) \\) barely changes i.e. the rate of change of displacement is very very small.

<div class=eqn> \[ \left| \frac{ d \xi}{ dx} \right| \ll 1 \] </div>

A slightly strange assumption you might think. It basically means that the angles we will be working with will also be small. That means we can use our small angle approximations!

<div class=eqn> \[ \begin{align*}
F_x &= T_x(x+\Delta x) + T_x(x) \\[6pt] &= T \cos(\theta_2) - T \cos(\theta_1) \, . \\[10pt]
F_y &= T_y(x+\Delta x) + T_y(x) \\[6pt] &= T \sin(\theta_2) - T \sin(\theta_1) \, .
\end{align*} \] </div>

Thanks to our small angle approximation, we can nice-ify this:

<div class=eqn> \[ F_x \approx 0 \ , \ F_y \approx T \left[ \frac{\partial \xi}{\partial x}(t, x+\Delta x) - \frac{\partial \xi}{\partial x}(t, x) \right] \ . \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{ \partial^2 \xi}{ \partial t^2} = c^2 \frac{ \partial^2 \xi}{ \partial x^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: The Wave Equation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>
