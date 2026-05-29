---
subid: fluid-eqn
title: Governing Equations of Fluid Mechanics
topics: fluid
---


<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{u}) = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Mass Continuity Equation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

However, we can potentially make things even easier: if the fluid is incompressible, then the density can't change over time. Then the equation simplifies to:


<div class=eqn> \[ \nabla \cdot \vec{u} = 0 \] </div> 

<div class=eqn> \[ \mu \frac{\partial^2 u_x}{\partial y^2} = -Q  \] </div> 

### Navier-Stokes Equation

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \rho \left( \frac{d \vec{u}}{dt} + (\vec{u} \cdot \nabla)\vec{u} \right)  =  - \nabla P + \mu∇^2\vec{u} - \rho \vec{g} + \dots  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: The Navier-Stokes Equation
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

### The Pressure equation

Changes to pressure will be assumed to be adiabatic

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \rho \frac{d}{dt} \left( \frac{P}{\rho^\gamma} \right) = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: The Navier-Stokes Equation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Subsets

#### Euler's equations

If the fluid isn't viscous (inviscid), then that would mean that \\( \mu = \lambda = 0 \\)

#### Incompressible

If the fluid is incompressible, then \\( \nabla \cdot \vec{u} = 0 \\) 

### Boundary conditions

Firstly, take this pipe thingy. Look at the walls of the pipe thingy. Hey, nice walls pipe thingy!

We are assuming that the pipe thingy's walls are firm enough such that no fluid is able to flow into it. This is called the *rigid wall* condition (or the *no-flux* condition)

<div class=eqn> \[ \vec{u}_\perp = 0  \] </div> 

There is also the no-slip condition, which tells us that the parallel flow on the boundary is zero

<div class=eqn> \[ \vec{u}_\parallel = 0  \] </div> 

Anyway, with that out the way, let's bring back our good friend, the unsolvable *Navier-Stokes equation*

<div class=eqn> \[ \rho \left( \frac{d \vec{u}}{dt} + \underbrace{(\vec{u} \cdot \nabla)\vec{u}}_{\text{inertial term}} \right)  =  - \nabla P + \underbrace{\mu∇^2\vec{u} + \lambda\nabla(\nabla \cdot \vec{u})}_{\text{inviscid term}} - \rho \vec{g} + \dots   \] </div> 

The inertial term is basically the acceleration of the fluid element (if the flow were steady), and the inviscid terms are just the amount viscousity contibutes to the whole shebang.

Now let's say that the derivatives (the \\( \nabla \\)'s, I mean) have a kinda eigenvalue of \\( \frac1{L_0} \\), such that:

<div class=eqn> \[ \nabla \sim \frac1{L_0}, \quad \nabla^2 \sim \frac1{L_0^2} \] </div> 

Then the two terms become:

<div class=eqn> \[ \begin{align}
    \rho(\vec{u} \cdot \nabla)\vec{u} &\sim \frac{\rho_0 u_0^2}{L_0} \\[6pt]
    \mu∇^2\vec{u} &\sim \frac{\mu u_0}{L_0^2}
    \end{align} \] </div> 

<div class=eqn> \[ \frac{\text{inertial}}{\text{inviscid}} = \text{Re} \] </div> 

### TL;DR