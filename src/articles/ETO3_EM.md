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

### EM Plane waves

It turns out we can treat electromagnetic waves as being *plane waves*. So let's say we have our generic plane wave:

<div class=eqn> \[ U = U_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} \] </div> 

This describes a wave with amplitude \\( U_0 \\) propagating in the direction \\( \hat{k} \\). Now this is a scalar quantity (since \\( U \\) doesn't have the vanity arrow above it ), but we can make this a vector simply by reattaching an arrow on top of the U's. We have electric and magnetic fields in the form:

<div class=eqn> \[ \begin{align}
    \vec{E} = \vec{E}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} \\[6pt]
    \vec{B} = \vec{B}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)}
    \end{align} \] </div> 

These are just the regular forms of plane waves, where \\( \vec{E}_0 \\) and \\( \vec{B}_0 \\) are the amplitudes of each wave, and \\( (\vec{k} \cdot \vec{r} - \omega t) \\) is the phase of the wave, which actually, you know what, we'll just call that \\( \phi \\) cus it's easier, so instead we get these formulae.

<div class=eqn> \[ \begin{align}
    \vec{E} = \vec{E}_0 e^{i \phi} \\[6pt]
    \vec{B} = \vec{B}_0 e^{i \phi}
    \end{align} \] </div> 

If we take a freezeframe of the wave at a particular instant of time, then that will mean \\( \vec{k} \cdot \vec{r} \\) is now constant. More importantly, \\( \vec{k} \cdot \vec{r} = \text{constant} \\) is the equation for a flat plane, hence where these waves get the name '*plane waves*'. The 'planes' are basically the peaks of the longitudinal waves, with each plane being a distance \\( \lambda \\) from each other (the wavelength).

Now obviously these planes take up all space, whereas a real plane wave will only take up a little bit of space. Having said that, there are times where pretending they take up all space it actually very helpful. Let me show you what I mean.

First, let's take our newfound wave equations and put them into the Maxwell formulae from earlier.

<div class=eqn> \[ \begin{align} 
    \vec{\nabla} \cdot \vec{E} &= 0 \\[6pt]
    \vec{\nabla} \cdot \vec{B} &= 0 \\[6pt]
    \vec{\nabla} \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\[6pt]
    \vec{\nabla} \times \vec{B} &= \frac1{c^2} \frac{\partial \vec{E}}{\partial t}
    \end{align} \] </div> 

Now the reason we like plane waves so much is because they have a really cool feature, where differentiating them with respect to space or time is the same as multiplying the wave by a certain number.

Starting with the first two, now that we have actual formulae for \\( \vec{E} \\) and \\( \vec{B} \\), we can actually calculate the values of \\( \vec{\nabla} \cdot \vec{E} \\) and \\( \vec{\nabla} \cdot \vec{B} \\). *(Remember that \\( \vec{\nabla} \cdot \\) is just taking the special derivatives and adding them together,  \\( \vec{\nabla} \cdot \vec{W} = \frac{d\vec{W}_x}{dx} + \frac{d\vec{W}_y}{dy} + \frac{d\vec{W}_z}{dz} \\) )*

<div class=eqn> \[ \begin{align} 
    \vec{\nabla} \cdot \vec{E}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} &= i\vec{k}\vec{E}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} \\[6pt]
    \vec{\nabla} \cdot \vec{B}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)} &= i\vec{k}\vec{B}_0 e^{i(\vec{k} \cdot \vec{r} - \omega t)}
    \end{align} \] </div> 

So taking the spacial derivatives gives us the same wave back, multiplied by \\( i\vec{k} \\). Putting those into the Maxwell formulae from earlier, and dividing by \\( i \\) on both sides:

<div class=eqn> \[ \begin{align} 
    \vec{k} \cdot \vec{E} &= 0 \\[6pt]
    \vec{k} \cdot \vec{B} &= 0
    \end{align} \] </div> 

These show that  \\( \vec{E} \\) and \\( \vec{k} \\) are perpendicular. Next, by taking time derivatives, we see that that's equivalent to multiplying by \\( -i\omega \\). Putting those in gives us:

<div class=eqn> \[ \begin{align} 
    \vec{k} \times \vec{E} &= \omega \vec{B} \\[6pt]
    \vec{k} \times \vec{B} &= - \frac{\omega}{c^2} \vec{E}
    \end{align} \] </div> 

These show that \\( \vec{E} \\) and \\( \vec{B} \\) are perpendicular to each other.

### Energy of an electromagnetic wave

Remember from E&M, that the energy of a wave is stored within the electric and magnetic fields.

Charges in an electric field gain energy from the electric field. This happens when a charge moves along the field. If it moves parallel to the field lines, then the field is doing all the work, meaning it

<div class=eqn> \[ W = \vec{E} \cdot \vec{J} \] </div> 

The rate of change of energy 

When work is transferred into the charges, we lose energy in the field (*\\( -W \\)*). When energy flows out of the volume, then we are loosing energy (obviously m8) (*\\( -\vec{\nabla} \cdot \vec{S} \\)*). So energy conservation is in this form?

<div class=eqn> \[ \frac{du}{dt} = -W -\vec{\nabla} \cdot \vec{S} \] </div> 

Or if you'd like, you can sub in

<div class=eqn> \[ \frac{du}{dt} + \vec{\nabla} \cdot \vec{S} = - \vec{E} \cdot \vec{J} \] </div> 

We can use the equations from ages ago

<div class=eqn> \[ \vec{J} = \frac1{\mu_0} ( \vec{\nabla} \times \vec{B} ) - \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \] </div> 

Putting that in gives us:

<div class=eqn> \[ \begin{align} \frac{du}{dt} + \vec{\nabla} \cdot \vec{S} 
    &= - \vec{E} \cdot \left( \frac1{\mu_0} ( \vec{\nabla} \times \vec{B} ) - \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right) \\[6pt] 
    &= - \vec{E} \cdot \frac1{\mu_0} ( \vec{\nabla} \times \vec{B} ) + \varepsilon_0 \vec{E} \cdot  \frac{\partial \vec{E}}{\partial t} 
    \end{align} \] </div>

By using an identity () we can turn this into:

<div class=eqn> \[  \frac{du}{dt} + \vec{\nabla} \cdot \vec{S} =  \frac1{\mu_0} \vec{\nabla} \cdot  ( \vec{E} \times \vec{B} ) - \frac1{\mu_0} \vec{B} \cdot  ( \vec{\nabla} \times \vec{E} ) + \varepsilon_0 \vec{E} \cdot  \frac{\partial \vec{E}}{\partial t}. \] </div> 

We're going somewhere with this, I promise. Then by using **M3**, we can change the 3rd term:

<div class=eqn> \[  \frac{du}{dt} + \vec{\nabla} \cdot \vec{S} =  \frac1{\mu_0} \vec{\nabla} \cdot  ( \vec{E} \times \vec{B} ) + \frac1{\mu_0} \vec{B} \cdot  \frac{\partial \vec{B}}{\partial t} + \varepsilon_0 \vec{E} \cdot  \frac{\partial \vec{E}}{\partial t}. \] </div> 

Now notice the last two terms follow the \\( \vec{W} \frac{\partial \vec{W}}{\partial t} \\) pattern. Now we use this fact:

<div class=eqn> \[ \vec{W} \cdot \frac{\partial \vec{W}}{\partial t} = \frac{\partial}{\partial t} \left( \frac{W^2}2 \right)  \] </div> 

That leaves us with our final equation:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{du}{dt} + \vec{\nabla} \cdot \vec{S} =  \frac1{\mu_0} \vec{\nabla} \cdot  ( \vec{E} \times \vec{B} ) + \frac{\partial}{\partial t} \left( \frac{B^2}{2\mu_0} + \frac{\varepsilon_0 E^2}2 \right) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

That means:

<div class=eqn> \[ \begin{align} 
    u &= \left( \frac{B^2}{2\mu_0} + \frac{\varepsilon_0 E^2}2 \right) \\[6pt] 
    \vec{S} &= \frac1{\mu_0} ( \vec{E} \times \vec{B} ) 
    \end{align} \] </div>



### TL;DR

Everything we did here was relatively easy. Just remember tho, life ain't always this easy. If you have waves travelling through a solid, we can no longer assume that \\( \rho \\) and \\( J \\) are zero


