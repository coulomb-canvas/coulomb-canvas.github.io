---
subid: wave-density
title: Wave and Energy Density
topics: eto
---


### EM Waves in dielectrics

Like we did the first time, we will take our Maxwell equations and assume there is no free charge or current (\\( \rho = 0, \vec{J} = 0\\)). This gives us these:

- **M1 IN MATTER [no charges]** \\[ \nabla \cdot \vec{D} = 0 \\]
- **M2 (unchanged)** \\[ \nabla \cdot \vec{B} = 0 \\]
- **M3 (unchanged)** \\[ \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \\]
- **M4 IN MATTER [no charges]** \\[ \nabla \times \vec{H} = \frac{\partial \vec{D}}{\partial t} \\]

We will assume that the displacement and the magnetic field strength both scale linearly:

<div class=eqn> \[ 
    \vec{D} = \varepsilon \vec{E} = \varepsilon_0 \varepsilon_r \vec{E} \\[6pt]
    \vec{H} = \varepsilon \vec{E} = \mu_0 \mu_r \vec{E} \] </div> 

And like we did the first time, we will take the curl of both sides of <span class="definition" data-definition="\[ \vec{\nabla} \times \vec{E} = -\frac{\partial\vec{B}}{\partial t} \]">**M3**</span>:

<div class=eqn> \[ \begin{align}
    \nabla \times (\nabla \times \vec{E}) &= \nabla \times (-\frac{\partial \vec{B}}{\partial t}) \\[6pt]
    &= -\frac{\partial}{\partial t} ( \nabla \times \vec{B} )
\end{align} \] </div> 

Now we want to use the <span class="definition" data-definition="Maxwell's Fourth Equation \[ ∇×(∇×\vec{E})=∇(∇⋅\vec{E})−∇^2\vec{E} \]">curl-of-curl identity</span>. But since we know that the divergence of the displacement is zero, that means the displacement of the electric field is also zero, meaning the identity is now:

<div class=eqn> \[ ∇×(∇×\vec{E}) = −∇^2\vec{E} \] </div> 

Put that in to give:

<div class=eqn> \[ −∇^2\vec{E} =  -\frac{\partial}{\partial t} ( \nabla \times \vec{B} ) \] </div> 

Also like we did the first time, rearrange <span class="definition" data-definition="Maxwell's Fourth Equation \[ \nabla \times \vec{H} = \frac{\partial \vec{D}}{\partial t} \]">**M4 IN MATTER [no charges]**</span> to get the curl of \\( \vec{B} \\):

<div class=eqn> \[ \nabla \times \vec{B} = \mu \nabla \times \vec{H} =  \mu \frac{\partial \vec{D}}{\partial t} = \mu\varepsilon \frac{\partial \vec{E}}{\partial t} \] </div>

So we put that in and cancel the negative signs:

<div class=eqn> \[ ∇^2\vec{E} =  \mu\varepsilon \frac{\partial \vec{E}}{\partial t} \] </div> 

That's a bloody wave equation, meaning \\( \frac1{v^2} = \mu\varepsilon \\), and therefore:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ v_\phi = \frac1{\sqrt{\mu\varepsilon}} = \frac1{\sqrt{\mu_0\mu_r\varepsilon_0\varepsilon_r}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Surface charge density
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

The refractive index is defined

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ n = \sqrt{\mu\varepsilon} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Refractive index
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

And, since the vast majority of things aren't magnetic (or 'weakly magnetisable' if you wanna get all fancy shmancy), that means that \\( \mu_r \\) is usually round about 1, meaning we end up with the approximation:

<div class=eqn> \[ n = \sqrt{\varepsilon_0} \] </div> 

However, this assumes they are constant.

All the different fields can be described by waves:

<div class=eqn> \[ \begin{align} 
    \vec{\nabla} \cdot \vec{E}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} &= i\vec{k}\vec{E}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} \\[6pt]
    \vec{\nabla} \cdot \vec{B}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} &= i\vec{k}\vec{B}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} \\[6pt]
    \vec{\nabla} \cdot \vec{D}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} &= i\vec{k}\vec{D}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} \\[6pt]
    \vec{\nabla} \cdot \vec{H}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} &= i\vec{k}\vec{H}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} \\[6pt]
\end{align} \] </div> 

Then, like we did before, all the derivatives with respect to time become \\( -i\omega \\) and all the partial derivatives with respect to space become \\( i\vec{k} \\), and that gives us:

<div class=eqn> \[ \begin{align} 
    \vec{k} \cdot \vec{B} &= 0 \\[6pt]
    \vec{k} \cdot \vec{D} &= 0 \\[6pt]
    \vec{k} \times \vec{E} &= \omega \vec{B} \\[6pt]
    \vec{k} \times \vec{H} &= -\omega \vec{D}
\end{align} \] </div> 

This means EM waves in media are still transverse

The impedance measures how well a medium resists an electromagnetic wave

Then we get a new quantity, called the impedence of free space, which tells us how much a vacuum resists an electromagnetic wave

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ Z_0 = \mu_0 c = \sqrt{\frac{\mu}{\varepsilon_0}} = 376.73 Ω \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Impedence of Free Space
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

### Energy density and flux

The *Poynting vector* is back!

<div class=eqn> \[ \begin{align} 
    \frac{\partial u}{\partial t} + \nabla \cdot \vec{S} &= -\vec{E}\cdot \vec{J}_f \\[6pt]
    &= -\vec{E}\cdot\left(\nabla \times \vec{H} - \frac{\partial \vec{D}}{\partial t}\right)
\end{align} \] </div> 

We can use the <span class="definition" data-definition="\[ ∇⋅(\vec{A}×\vec{B})=\vec{B}⋅(∇×\vec{A})−\vec{A}⋅(∇×\vec{B}) \]">divergence of a cross product</span> to turn this into:

<div class=eqn> \[
    \frac{\partial u}{\partial t} + \nabla \cdot \vec{S} = \nabla\cdot(\vec{E}\times\vec{H}) - \vec{H}\cdot(\nabla\times\vec{E}) + \vec{E}\cdot\frac{\partial \vec{D}}{\partial t}
\] </div> 

That gives us the \\( \nabla \cdot \vec{S} \\) we wanted:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{S} = \vec{E}\times\vec{H} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Refractive index
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

And then with a cheeky <span class="definition" data-definition="Maxwell's third law \[ \vec{\nabla} \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \]">**M3**</span>, we can get the \\( u \\) we are looking for:

<div class=eqn> \[ \begin{align}
    \frac{\partial u}{\partial t} + \nabla \cdot \vec{S} &= \nabla\cdot(\vec{E}\times\vec{H}) + \vec{H}\cdot\frac{\partial \vec{B}}{\partial t} + \vec{E}\cdot\frac{\partial \vec{D}}{\partial t} \\[6pt]
    &= \nabla\cdot(\vec{E}\times\vec{H}) + \frac{\partial}{\partial t} \left( \vec{H}\cdot\vec{B} + \vec{E}\cdot\vec{D} \right)
\end{align} \] </div> 


<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ u = \frac12 (\vec{E}\cdot\vec{D} + \vec{H}\cdot\vec{B}) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Refractive index
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>
