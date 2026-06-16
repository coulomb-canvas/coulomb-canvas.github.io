---
subid: qm-ang-mom
title: Angular Momentum
topic: qaia1
---

Classically, the angular momentum is just: 

<div class=eqn> \[ \vec{L} = \vec{R} \times \vec{P} \] </div>

And in this case, it’s very simple, you just look at the particle, compute the position and the angular momentum, and voila, you have an angular momentum. However, this is quantum physics, of course it ain’t that bloody simple. 

For one, if you remember, we don’t use simple values, we use operators. So, this becomes: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{\vec{L}} = \hat{\vec{R}} \times \hat{\vec{P}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Calculating these gives us the formulae for the angular momentum in different components: 

<div class=eqn> \[ \begin{align}
\hat{L}_x &= \hat{Y}\hat{P}_z - \hat{Z}\hat{P}_y, \\
\hat{L}_y &= \hat{Z}\hat{P}_x - \hat{X}\hat{P}_z, \\
\hat{L}_z &= \hat{X}\hat{P}_y - \hat{Y}\hat{P}_x.
\end{align} \] </div>

We know what these operators are, so that gives: 

But now we have position and momentum, which we can’t know both of precisely. If we calculate the commutators, we end up with something interesting: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ [\hat{L}_x, \hat{L}_y] = i\hbar\hat{L}_z \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>


However, never fear! We have a new and improved quantity, the total angular momentum: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{L}^2 = \hat{L}^2_x + \hat{L}^2_y + \hat{L}^2_z \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

This can commute with any one of the operators. Usually we pick z, 

### The eigenvalues and eigenfunctions

We want to determine the eigenfunction of the total angular momentum and Lz 

And we have to work in spherical co-ordinates. 

Now ICL, whenever we work with spherical co-ordinates, the notes look ugly as hell, partially because of the nabla in spherical co-ordinates:

<div class=eqn> \[ \nabla =
\hat{\mathbf{r}}_0 \frac{\partial}{\partial r} +
\frac{1}{r}\hat{\boldsymbol{\theta}}_0 \frac{\partial}{\partial \theta} +
\frac{1}{r\sin\theta}\hat{\boldsymbol{\phi}}_0 \frac{\partial}{\partial \phi} \] </div>

As annoying as that is, it’s even worse in Cartesian co-ordinates, so be greatful 

The angular momentum operator becomes: 

<div class=eqn> \[ \begin{align} \hat{L}
        &= -i\hbar\,\hat{r}\times\nabla \\[6pt]
        &= -i\hbar\left(\hat{\phi}_0\frac{\partial}{\partial\theta}
        -\frac{1}{\sin\theta}\hat{\theta}_0\frac{\partial}{\partial\phi}\right).
\end{align} \] </div>

We want this in the z component, which we can do by just doting:

<div class=eqn> \[ \begin{align}
\hat{L}_z &= \hat{z}_0\cdot\hat{L} \\[6pt]
        &= -i\hbar\frac{\partial}{\partial\phi}.
\end{align} \] </div>

Then we can apply the operator twice to get the total squared:

<div class=eqn> \[ \begin{align}
\hat{L}^2
&= -\hbar^2(\hat{r}\times\nabla)\cdot(\hat{r}\times\nabla) \\[6pt]
&= -\hbar^2\left[
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right) +
\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
\right].
\end{align} \] </div>

I don’t think you have to remember these, but bare ‘em in mind, k? More importantly, don't think too much about what's there. Rather, think about what's *not* there. We have three operators, and yet not a *single* r in any of them!

Notice that none of our equations actually depend on the radius at all. That means that Y only changes with respect to the two angles:

<div class=eqn> \[ Y = Y(\theta, \varphi) \] </div>

We can use separation of variables:

<div class=eqn> \[ Y(\theta, \varphi) = \Theta(\theta)\Phi(\phi) \] </div>

Apply <span class="definition" data-definition="\[ \hat{L}_z = -i\hbar\frac{\partial}{\partial\varphi}. \]">the \\( \hat{L}_z \\) operator</span> to it:

<div class=eqn> \[ -i\hbar\frac{\partial}{\partial\varphi}\Theta(\theta)\Phi(\varphi) = \nu\Theta(\theta)\Phi(\varphi)  \] </div>

Divide both sides:

<div class=eqn> \[ -i\hbar\frac{\partial\Phi(\varphi)}{\partial\varphi} = \nu\Phi(\varphi)  \] </div>

Solving:

<div class=eqn> \[ \Phi(\varphi) = Ce^\frac{i\nu \varphi}{\hbar}  \] </div>

But this has to be quantised. Since the wavefunction needs to be single-valued, then that creates the boundary condition that by changing the angle by 2π, you get the same angle back, and so:

<div class=eqn> \[ \Phi(\varphi) = \frac1{\sqrt{2π}} e^{im \varphi}  \] </div>

The eigenvalue is:

<div class=eqn> \[ \nu = m \hbar \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{L}_z Y_{lm}(\theta,\varphi) = \hbar m Y_{lm}(\theta,\varphi) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

***

So now we have phi, but now we have to deal with this pain-in-the-arse theta, Apply <span class="definition" data-definition="\[ \hat{L}^2 = -\hbar^2\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta} \left(\sin\theta\frac{\partial}{\partial\theta}\right) + \frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]. \]">the \\( \hat{L}^2 \\) operator</span>:

<div class=large-eqn> \[ -\hbar^2 \Phi(\varphi)\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial \Theta(\theta)}{\partial\theta}\right)
-\hbar^2\frac{\Theta(\theta)}{\sin^2\theta}\frac{\partial^2 \Phi(\varphi)}{\partial\varphi^2}
= \lambda \Theta(\theta)\Phi(\varphi).  \] </div>

Bloody hell that's ugly. Having said that, after some calculation, we end up with:

<div class=eqn> \[ \lambda = \hbar^2 l(l+1) \] </div>

Giving

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{L}^2 Y_{lm}(\theta,\varphi) = \hbar^2 l(l+1)Y_{lm}(\theta,\varphi) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

***



