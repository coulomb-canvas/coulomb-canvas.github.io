---
subid: qm-3d
title: Systems in 3D
topic: qaia1
---

### Particle in 3D infinite potential well

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_{n_x, n_y, n_z} 
                = \frac{\hbar^2 π^2}{8M} \left( 
                    \frac{n^2_x}{a^2} + \frac{n^2_y}{b^2} + \frac{n^2_z}{c^2}
                \right)
            \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Which is literally just the 1D one but with 3 D's. That's way too easy

What about degeneracy? Say we have:

<div class=eqn> \[  E_{n_x, n_y, n_z} 
    = \frac{\hbar^2 π^2}{8M} \left( 
        \frac{n^2_x + n^2_y}{a^2} + \frac{n^2_z}{c^2}
    \right)
\] </div>

If any of the sides are equal in length, there is degeneracy

### Three dimensional harmonic oscillator

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align} 
                \hat{V}(\vec{r}) &= \frac12 k_x \hat{X}^2 + \frac12 k_y \hat{Y}^2 + \frac12 k_z \hat{Z}^2 \\[6pt]
                &= \hat{V}_x(x) + \hat{V}_y(y) + \hat{V}_z(z) 
            \end{align} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class=eqn> \[ \phi(x, y, z) = X(x)Y(y)Z(z) \] </div>

Once again, I can't be arsed to go over the derivation, but you end up with: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_{n_x, n_y, n_z} 
                = \left( \frac12 + n_x \right) \hbar \omega_x 
                + \left( \frac12 + n_y \right) \hbar \omega_y
                + \left( \frac12 + n_z \right) \hbar \omega_z
            \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Spherical Co-ordinates

<div class=eqn> \[  \nabla^2 \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial \phi(r,\theta,\varphi)}{\partial r}\right) +
\frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta\frac{\partial \phi(r,\theta,\varphi)}{\partial \theta}\right) +
\frac{1}{r^2\sin^2\theta}\frac{\partial^2 \phi(r,\theta,\varphi)}{\partial \varphi^2}
\] </div>

*Spits out drink* What the hell it THIS?!! That is a pisstake m8!

<div class=eqn> \[
\left[
-\frac{\hbar^2}{2M}\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right) + r^2V - r^2E
\right]
-
\frac{\hbar^2}{2M}
\left[
\frac{1}{Y\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)
+
\frac{1}{Y\sin^2\theta}\frac{\partial^2 Y}{\partial\varphi^2}
\right]
= 0.
\] </div>

#### Angular Part

<div class=eqn> \[
\frac{\hbar^2}{2M}
\left[
\frac{1}{Y\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)
+
\frac{1}{Y\sin^2\theta}\frac{\partial^2 Y}{\partial\varphi^2}
\right]
= \lambda
\] </div>

This looks like <span class="definition" data-definition="\[ \hat{L}^2 = -\hbar^2\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta} \left(\sin\theta\frac{\partial}{\partial\theta}\right) + \frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]. \]">the \\( \hat{L}^2 \\) operator</span>, so we can say:

<div class=eqn> \[ \frac1{2YM} \hat{L}^2Y = \lambda, \text{ where} \lambda = \hbar^2 l(l+1) \] </div>

#### Radial Part

<div class=eqn> \[
-\frac{\hbar^2}{2M}\frac{d^2\chi(r)}{dr^2}
+ \left[V(r)+\frac{\hbar^2}{2Mr^2}l(l+1)\right]\chi(r)
= E\chi(r).
\] </div>

###

<div class=eqn> \[
V(r)= \begin{cases}
    0, & r \le a, \\
    \infty, & r>a.
\end{cases} \] </div>

There is still the extra potential term, so we can't just 'ignore' potential

There are two flavours of solutions: spherical Bessel functions \\( 𝑗_𝑙(𝑥) \\) and spherical Neumann functions \\( 𝑛_𝑙(𝑥) \\)

As r tends to zero, Neumann functions become infinite. So only Bessel functions work

### Hydrogen-like atoms

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ V(\vec{r}) = \frac{-Ze}{4π\varepsilon_0 r} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>





<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_n = -\frac{Mc^2\alpha^2}{2}\frac{1}{n^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>





n can have values 1, 2, 3
l can have values 0, 1, 2, where \\( l < n \\)
m can have values \\( -l \to l \\).