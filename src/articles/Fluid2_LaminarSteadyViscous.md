---
subid: lam-ste-vis
title: Laminar, Steady and Viscous flow
topics: fluid
---

Thanks to my phenominal introductory skills

#### Viscous flow

As the name quite clearly implies... this is just flow where you actually have to take viscocity into consideration

#### Steady flow

<div class=eqn> \[ \vec{u}( \vec{r}, t ) = \vec{u}( \vec{r} )  \] </div> 

#### Laminar flow

This means the fluid flows in layers, as opposed to turbulent flow

***

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{\partial P}{\partial x} = \mu \frac{\partial^2 u_x}{\partial y^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

These must be equal to some constant, which we will call \\( -Q \\)

<div class=eqn> \[ \mu \frac{\partial^2 u_x}{\partial y^2} = -Q  \] </div> 

<div class=eqn> \[ u_x(y) = -\frac{Q}{2\mu} y^2 + Ay + B  \] </div> 

Using the boundary conditions:

<div class=eqn> \[ \begin{align} 0 &= -\frac{Qa^2}{2\mu} - aA + B \\[6pt]
        0 &= -\frac{Qa^2}{2\mu} + aA + B \end{align} \] </div> 

That gives us \\( A = 0 \\) and \\( B = \frac{Qa^2}{2\mu} \\). Therefore our flow is:

<div class=eqn> \[ u_x(y) = -\frac{Q}{2\mu} y^2 + \frac{Qa^2}{2\mu} = \frac{Q}{2\mu} (a^2 - y^2)  \] </div> 

Then use the left hand side:

<div class=eqn> \[ \frac{\partial P}{\partial x} = -Q = -\frac{P_2 - P_1}L  \] </div> 

### Poiseuille Flow

*PWA-soo-y?* 

When we have a cylindrically symmetric, viscous, steady, laminar flow through a cylindrical pipe, we call it *Poiseuille Flow*. We'll be using cylindrical co-ordinates and having the fluid flow in the \\( \hat{z} \\)-direction


We have this weird infinite water source on the left, and it flows into this teeny tiny tube on the right, which has a radius \\( a \\). At the end directly next to the infinite water source, the pressure is \\( P_1 \\), and at the other point there is a lower pressure, \\( P_2 \\).

Now let's consider a flow which is steady (doesn't change with time), laminar (works like layers) and viscous (sticky). Using the polar co-ordinates, we can define the flow as:

<div class=eqn> \[ \vec{u} = u_z(r) \hat{z}  \] </div> 

The fluid element is this... idk what you call this shape. It's like a curvy cuboid type thing? A curvy cuboid with height \\( \Delta r \\), depth \\( \Delta z \\) and arcs \\( r \Delta \phi \\) and \\( (r + \Delta r) \Delta \phi \\)

The viscous force is:

<div class=eqn> \[  F_v = \mu A \frac{\partial u_z}{\partial r} \] </div> 

The area on the top layer is a bit bigger than the one on the bottom, so you have to take them away from each other. The top has an area \\( (r + \Delta r) \Delta \phi \Delta z \\), and the bottom one has area \\( r \Delta \phi \Delta z \\). To get the 

<div class=eqn> \[ u_x(y) = \frac{Q}{4\mu} (a^2 - r^2) = \frac{P_1 - P_2}{4\mu L} (a^2 - r^2)  \] </div> 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ M = \frac{\Delta P \pi \rho}{4\mu L} a^4 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Steady Viscous Flow

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \nabla P = \mu \nabla^2 \vec{u} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### The Reynolds number

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \text{Re} = \frac{ \rho_0 L_0 u_0}{\mu} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### TL;DR