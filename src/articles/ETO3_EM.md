---
subid: maxwell-em
title: Electromagnetic Waves
topics: eto
---

If we take our 4 Maxwell equations, and let's make it so that there is no charge or current (\\( \rho = 0, \vec{J} = 0\\)). This gives us these:

<div class=eqn> \[ \begin{align} 
    \vec{\nabla} \cdot \vec{E} &= 0 \\[6pt]
    \vec{\nabla} \cdot \vec{B} &= 0 \\[6pt]
    \vec{\nabla} \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\[6pt]
    \vec{\nabla} \times \vec{B} &= \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
    \end{align} \] </div> 

Those last 2 equations are particularly interesting, so let's slice and dice 'em a little bit. Let's take the curl of **M3**

<div class=eqn> \[ \begin{align} \vec{\nabla} \times (\vec{\nabla} \times \vec{E}) 
    &= \vec{\nabla} \times \left( -\frac{\partial \vec{B}}{\partial t} \right) \\[6pt]
    &= -\frac{\partial}{\partial t} \vec{\nabla} \times \vec{B} 
    \end{align} \] </div> 

Now we have that \\( \vec{\nabla} \times \vec{B} \\) from **M4**. In that case, we can just wack that value in:

<div class=eqn> \[ \vec{\nabla} \times (\vec{\nabla} \times \vec{E}) = - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} \] </div> 

Then we can use the identity

<div class=eqn> \[ \vec{\nabla}(\vec{\nabla} \cdot \vec{E}) - \vec{\nabla}^2 \vec{E} = - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} \] </div> 

Since there is no charge, the divergence is zero \\( \vec{\nabla} \cdot \vec{E} = 0 \\), leaving us with:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla}^2 \vec{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1a: 
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Doing the same thing, except starting by taking the curl of **M4** instead of **M3** gives us:


<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla}^2 \vec{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1b: 
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Compare any one of these equations to the wave equation:

<div class=eqn> \[ \vec{\nabla}^2 U = \frac1{v^2} \frac{\partial^2 U}{\partial t^2} \] </div> 

That gives us the speed of electric and magnetic waves:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ v = \frac1{\sqrt{\mu_0 \varepsilon_0}} \approx 300,000,000 \text{ ms}^{-1} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Speed of EM waves
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>



### TL;DR


