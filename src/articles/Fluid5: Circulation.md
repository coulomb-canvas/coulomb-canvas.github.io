---
subid: vortex
title: Circulation and Vorticity
topics: fluid
---

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{w} = \nabla \times \vec{u} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Vorticity
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

If \\( \nabla \times \vec{u} \\), then the flow is *irrotational*. 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ K = \oint_\Gamma \vec{u} \cdot d\vec{\ell} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Circulation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

<div class=eqn> \[ \oint_\Gamma \vec{u} \cdot d\vec{\ell} = \int_S (\nabla \times \vec{u}) \cdot d\vec{S} \] </div> 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dK}{dt} = \frac{d}{dt} \left[ \oint_\Gamma \vec{u} \cdot d\vec{\ell} \right] = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Circulation Theorem
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Start out by simply writing out the integral as being differentiated by \\( t \\), then move the operator inside the integral because it makes no difference:

<div class=eqn> \[ \begin{align} \frac{dK}{dt} &= \frac{d}{dt} \oint_\Gamma \vec{u} \cdot d\vec{\ell} \\[6pt]
    &= \oint_\Gamma \frac{d}{dt} (\vec{u} \cdot d\vec{\ell}) \end{align} \] </div> 

Then expand:

<div class=eqn> \[ \oint_\Gamma \frac{d}{dt} (\vec{u} \cdot d\vec{\ell}) = \oint_\Gamma \frac{d\vec{u}}{dt} \cdot d\vec{\ell} + \oint_\Gamma  \vec{u} \cdot \frac{d(d\vec{\ell})}{dt} \] </div> 

So let's work this out, starting with the integral on the right. You might think that differentiating \\(d\vec{\ell} \\) is a bit odd, but bare in mind that the direction \\(d\vec{\ell} \\) points will be changing over time. If we say that \\(d\vec{\ell} = \vec{r}_2 - \vec{r}_1 \\), then that means:

<div class=eqn> \[ \frac{d(d\vec{\ell})}{dt} = \frac{d\vec{r}_2}{dt} - \frac{d\vec{r}_1}{dt} = d\vec{u} \] </div> 

So then plugging that in gives us:

<div class=eqn> \[ \oint_\Gamma  \vec{u} \cdot \frac{d(d\vec{\ell})}{dt} = \oint_\Gamma  \vec{u} \cdot d\vec{u} 
    = \oint_\Gamma  d\frac{u^2}2  \] </div> 

This term is therefore zero

Now the first term. Go back to the inviscid, incompressible Navier-Stokes equation:

<div class=eqn> \[ \rho \frac{d \vec{u}}{dt}  =  - \nabla P - \rho \vec{g} + \dots  \] </div> 

Hey, look at that, there's a \\( \frac{d \vec{u}}{dt} \\) right there for us to nick! So just devide both sides by \\( \rho \\) and ignore the dots at the end, and then we end up with:

<div class=eqn> \[ \frac{d \vec{u}}{dt}  =  - \frac1{\rho} \nabla P - g \hat{k}  \] </div> 

Meaning:

<div class=eqn> \[ \frac{dK}{dt} = \oint_\Gamma \left( \frac{-1}{\rho} \nabla P - g \hat{k} \right) \cdot d\vec{\ell} \] </div> 

Since the \\( \ell \\) and the \\( \hat{k} \\) are perpendicular to each other:

<div class=eqn> \[ g \oint_\Gamma \hat{k} \cdot d\vec{\ell} = 0 \] </div> 

Leaving:

<div class=eqn> \[ \frac{dK}{dt} = \oint_\Gamma \left( \frac{-1}{\rho} \nabla P \right) \cdot d\vec{\ell} \] </div> 


This is true is the fluid is either:

- **INCOMPRESSIBLE** In that case, the density if constant, meaning the \\( \frac{-1}{\rho} \\) term can be taken outside the integral. Meaning: <div class=eqn> \\[ \frac{dK}{dt} = \frac{-1}{\rho} \oint_\Gamma ( \nabla P ) \cdot d\vec{\ell}
    = \frac{-1}{\rho} \oint_\Gamma dP = 0\\] </div>  As required.
- **BAROTROPIC** This means that the density depends on the pressure: <div class=eqn> \\[ \rho = \rho(P) \\] </div> For example, when the flow is *adiabatic* (where \\( \frac{P}{\rho \gamma} \\)) or *isothermal* (where \\( \frac{P}{\rho} \\))

Now we can apply Stokes' Theorem to the remaining integral:

<div class=eqn> \[ \oint_\Gamma \left( -\frac{\nabla P}{\rho(P)} \right) \cdot d\vec{\ell} = \oint_S \left( -\frac{\nabla P}{\rho(P)} \right) \cdot d\vec{S} \] </div> 

Then by using an identity:

<div class=eqn> \[ \nabla \times \left(\frac{\vec{A}}{f}\right) =
    \frac{\nabla f \times \vec{A}}{f^2} + \frac{\nabla \times \vec{A}}{f} \]
 </div> 

We get:

<div class=eqn> \[ \nabla \times \left(\frac{\nabla P}{\rho}\right) =
    \frac{\nabla \rho \times \nabla P}{\rho^2} + \frac{\nabla \times (\nabla P)}{\rho}\]
 </div> 

### Potential flow

From usual mathematics, we know that if the curl of a vector is zero, then we can write:

<div class=eqn> \[ \vec{u} = \nabla \phi \] </div> 

This means two things

- **THE FLOW IS NOW DESCRIBED BY A SCALAR** Instead of using a velocity vector which requires 3 scalar functions (x, y, and z), we can use a single scalar function \\( \phi \\). Since the curl of a gradient is 0: \\[ \nabla \times \nabla \phi \\] This automatically fulfils the *irrotational condition*.
- **SOLUTIONS OF THE LAPLACIAN CAN BE INCLUDED** If we also consider that the flow is *incompressible* (meaning the divergence of that vector is also zero, \\( \nabla \cdot \vec{u} = 0 \\)), then that means \\( \nabla^2 \phi = 0 \\), or the Laplacian is zero. Any flow which solves the laplacian is called a *potential flow*. \\n Since the Laplace Equation is linear, any linear combination of solutions is also a solution: \\[ \phi = a\phi_1 + b\phi_2 \text{ is a solution}\\]

#### Example 1: Uniform Flow

Here's an easy peezy lemon squeezy example of a potential flow:

<div class=eqn> \[ \vec{u} = u_0 \hat{i} \] </div> 

That means

<div class=eqn> \[ \nabla \phi = u_0 \] </div> 

Giving a solution

<div class=eqn> \[ \phi = u_0 x + \text{constant} \] </div> 

#### Example 2: 2D Point Source

<div class=eqn> \[ \vec{u} = \frac{q}{2πr} \hat{r} \] </div> 

Is this an irrotational flow?

<div class=eqn> \[ \nabla \times \vec{u} = \frac1{r} \begin{vmatrix} \hat{r} & r\hat{\theta} & \hat{z} \\ 
    \frac{\partial}{\partial r} & \frac{\partial}{\partial \theta} & \frac{\partial}{\partial z} \\  
    \frac{q}{2πr} & 0 & 0 \end{vmatrix} = 0 \] </div> 

Yes it is!!

<div class=eqn> \[ \nabla \cdot \vec{u} = \frac{1}{r}\frac{\partial}{\partial r}(ru_r)
    + \frac{1}{r}\frac{\partial u_\theta}{\partial \theta} + \frac{\partial u_z}{\partial z} \] </div> 

Therefore our potential is:

<div class=eqn> \[ \nabla\phi = \frac{q}{2πr} \hat{r} \] </div> 

<div class=eqn> \[ \phi = \frac{q}{2π} \ln{r} + C = \frac{q}{4π} \ln{(r^2)} + C \] </div> 

Then in cartesian:

<div class=eqn> \[ \phi  = \frac{q}{4π} \ln{(x^2 + y^2)} + C \] </div> 


### Free vortex

A *free vortex* has a circular path around an axis, but it fades out to zero away from it \\( \nabla \times \vec{u} \\).

Since things are spinning, we have to use *cylindrical co-ordinates*. Since the fluid is only flowing around and arounda (i.e. not going up or outwards), the flow only has an angular component:

<div class=eqn> \[ \vec{u} = u_\theta \hat{\theta} \] </div> 

So with the whole curl being zero thing, that means:

<div class=eqn> \[ \frac1{r} \frac{\partial}{\partial r} ( r u_\theta ) = 0 \] </div> 

Solved by:

<div class=eqn> \[ u_\theta = \frac1{r} \frac{K}{2π} \] </div> 

Bare in mind, as \\( r \\) tends to zero, this would mean the flow speed becomes infinite. This is obviously impossible, there is a distance \\( \delta \\) where the speed increases linearly

Anyway, let's calculate the circulation

<div class=eqn> \[ \begin{align} \oint_\Gamma \vec{u} \cdot d\vec{\ell} 
    &= \int_0^{2π} u_\theta r \ d\theta \\[6pt]
    &= \frac{K}{2π} \int_0^{2π} u_\theta \ d\theta \\[6pt]
    &= K 
\end{align} \] </div> 

In general, if the path \\( \Gamma \\) goes around the axis, then \\( K \neq 0 \\).

The potential is then:

<div class=eqn> \[ u_\theta =  \frac{K}{2π} \theta + C \] </div> 

If we go farther out, the pressure becomes atmospheric pressure and the flow speed becomes zero. Take the radial component of the Navier-Stokes equation:




### TL;DR


