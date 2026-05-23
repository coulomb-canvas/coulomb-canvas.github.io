---
subid: maxwell-eq
title: Maxwell's Equations
topics: eto
---

Start off with the charge of a particle

<div class=eqn> \[ Q = \int_V \rho \  dV \] </div> 

We can calculate the rate of change of charge, simply by differentiating with respect to time. However, there is a slightly different way we could do this. When you think about it, the rate of change of charge in a given volume is equal to the current coming out of the closed surface.

<div class=eqn> \[ \frac{dQ}{dt} = - I \] </div> 

Our current is \\( I \\), but remember, we use *current density* now. And remember from last time, what is the mathematical equivalent of "the ___ coming out of a closed surface"?

<div class=eqn> \[ \frac{dQ}{dt} = \frac{d}{dt} \int_V \rho \ dV = - \int_S \vec{J} \cdot d\vec{S} \] </div> 

Next, the divergence theorem tells us that:

<div class=eqn> \[ \int_S \vec{W} \cdot d\vec{S} = \int_V \vec{\nabla} \cdot \vec{W} \ dV  \] </div> 

Putting that in gives us

<div class=eqn> \[ \int_V \frac{d\rho}{dt} \ dV = - \int_V \vec{\nabla} \cdot \vec{J} \ dV \] </div> 

Rearranging gives us

<div class=eqn> \[ \int_V \left( \frac{d\rho}{dt} + \vec{\nabla} \cdot \vec{J} \right) \ dV = 0 \] </div> 

This leaves us with the continuity equation for electric charge:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{d\rho}{dt} + \vec{\nabla} \cdot \vec{J} = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title" style="font-size: 3.5vh">
            Formula 1: Continuity Equation for Electric Charge
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

What does this equation actually mean? Well it's usually written in this form, but I think it's easier to see what it's actually trying to tell us if you write it like this:

<div class=eqn> \[ \frac{d\rho}{dt} = - \vec{\nabla} \cdot \vec{J} \] </div> 

\\( \vec{\nabla} \cdot \vec{J} \\) is the *divergence of the current density*, which we know describes how much of the current density is flowing in or out of the point. \\( \frac{d\rho}{dt} \\) is quite simply the rate at which the charge density, \\( \rho \\), changes over time.

Therefore, what this equation is saying is that if, for whatever reason, the current density flowing out of a point is not zero, then the overall charge density must be decreasing. If \\( \vec{\nabla} \cdot \vec{J} \\) is positive, that means that charge is flowing out, so the overall density of the object must be decreasing.

### Maxwell's 1st equation

This process of using the Divergence theorem to get brand new equations is exactly what my boy Maxwell did to get his famous formulae. First we'll start with Gauss' law.

<div class=eqn> \[ \oint_S \vec{E} \cdot d\vec{S} = \frac1{\varepsilon_0} \int_V \rho \ dV \] </div> 

Use the divergence theorem

<div class=eqn> \[ \oint_S \vec{E} \cdot d\vec{S} =  \int_V \vec{\nabla} \cdot \vec{E} \ dV =  \int_V \frac{\rho}{\varepsilon_0} \ dV \] </div> 

They are both integrals with respect to volume, so:

<div class=eqn> \[\int_V \left( \vec{\nabla} \cdot \vec{E} - \frac{\rho}{\varepsilon_0} \right) \ dV \] </div> 

And therefore, by using the same logic, we end up with the first Maxwell equation, or as I'll be calling it **M1**.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Maxwell Equation 1
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Maxwell's 2nd equation

This is a lot of fun, isn't it? Let's try it again, this time with the *solenoidal condition*.

<div class=eqn> \[ \oint_S \vec{B} \cdot d\vec{S} = 0 \] </div> 

This is even bloody easy, because it already equals zero meaning we don't have to do any grift rearranging. Using the divergence theorem gives us:

<div class=eqn> \[ \oint_S \vec{B} \cdot d\vec{S} = \int_V \vec{\nabla} \cdot \vec{B} \ dV = 0 \] </div> 

And that must therefore mean that all the stuff inside the integral must be equal to zero, leaving us with Maxwell's 2nd equation (or **M2**)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \cdot \vec{B} = 0 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Maxwell Equation 2
        </div><div class="formula-tooltip-desc">
            The amount of magnetic flux flowing into a surface is the same as the magnetic flux flowing out of a surface.
        </div></span>
    </div>
</div>

### Maxwell's 3rd equation

Next up, we're using *Faraday's law*:

<div class=eqn> \[ \oint_C \vec{E} \cdot d\vec{l} = -\frac{d}{dt} \int_S \vec{B} \cdot d\vec{S} \] </div> 

Now a bumbling baffoon like yourself might be thinking "lEt'S jUsT uSe ThE dIveRgEnCe ThEoREm lIkE wE'vE bEEn DoInG aLL tHiS wHIlE!" However, to the intellectual few of us (like you at the back, yes you m8! No not *you*, the guy behind you...), *we* noticed that the divergence theorem only applies when there is a \\( d\vec{S} \\). However, here there's a \\( d\vec{l} \\), which means we can't use the divergence theorem.

Luckily, I singlehandedly discovered the solution to this problem. Something I decided to call (for no particular reason) *Stoke's theorem*. I'm sure you've never heard of this before, I know, so what is it?

<div class=eqn> \[ \oint_C \vec{E} \cdot d\vec{l} = \int_S \vec{\nabla} \times \vec{E} \cdot d\vec{S} \] </div> 

So then that gives us:

<div class=eqn> \[ \int_S \vec{\nabla} \times \vec{E} \cdot d\vec{S} = \int_S -\frac{\partial\vec{B}}{\partial t} \cdot d\vec{S} \] </div> 

Then by using the same grift mathematics, we get

<div class=eqn> \[ \int_S \left( \vec{\nabla} \times \vec{E} + \frac{\partial\vec{B}}{\partial t} \right) \cdot d\vec{S} \] </div> 

Leaving us with Maxwell's 3rd equation, **M3**

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \times \vec{E} = -\frac{\partial\vec{B}}{\partial t} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4: Maxwell Equation 3
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Maxwell's 4th Equation

Last but not least. We started with Gauss' Law, so we end with his magnetic cousin.

<div class=eqn> \[ \oint_C \vec{B} \cdot d\vec{l} = \mu_0 \int_S \vec{J} \cdot d\vec{S} \] </div> 

By using my new and improved *Stoke's Theorem*, we end up with

<div class=eqn> \[ \oint_C \vec{B} \cdot d\vec{l} = \int_S \vec{\nabla} \times \vec{B} \cdot d\vec{S} =  \int_S \mu_0 \vec{J} \cdot d\vec{S} \] </div> 

Then be removing the integrals, we end up with the final of Maxwell's equations:

<div class=eqn> \[ \vec{\nabla} \times \vec{B} = \mu_0 \vec{J} \] </div> 

Now I know what you are thinking: "*What the hell? You just said that we've derived the fourth and final Maxwell equation, no? So why haven't you put one of the orange formula boxes around it? Ain't this important?*"

Well, as it turns out, this is one of those cases where your bumbling baffonery kicks in again. Let's take the divergence of this \\( \vec{\nabla} \times \vec{B} \\). We know that if we take the div curl of any vector, we end up with zero:

<div class=eqn> \[ \vec{\nabla} \cdot ( \vec{\nabla} \times \vec{B} ) = \mu_0 \vec{\nabla} \cdot \vec{J} = 0  \] </div> 

But if \\( \mu_0 \vec{\nabla} \cdot \vec{J} = 0 \\), then since \\( \mu_0 \\) is a constant, then that must mean that \\( \vec{\nabla} \cdot \vec{J} = 0 \\). But then going all the way back to our continuity equation for electric charge from right at the beginning:

<div class=eqn> \[ \frac{d\rho}{dt} = - \vec{\nabla} \cdot \vec{J} = 0 \] </div> 

So the rate of change of charge density must also be zero, meaning no charge can accumulate in any region. This is obviously tapped, which is why we will not be accepting this explanation. So how can we do this?

Well let's look at that \\( \rho \\). If we rearrange **M1**, we end up with this identity for the charge density:

<div class=eqn> \[ \rho = \varepsilon_0  \vec{\nabla} \cdot \vec{E} \] </div> 

Now put that into the continuity equation:

<div class=eqn> \[ \begin{align} \frac{d\rho}{dt} + \vec{\nabla} \cdot \vec{J} 
    &= \varepsilon_0 \frac{d\vec{\nabla} \cdot \vec{E}}{dt} + \vec{\nabla} \cdot \vec{J} \\[6pt]
    &= \varepsilon_0 \vec{\nabla} \cdot \frac{d\vec{E}}{dt} + \vec{\nabla} \cdot \vec{J} = 0 
    \end{align} \] </div> 

Then by taking the "*\\( \vec{\nabla} \cdot \\)*" out, we get this relation:

<div class=eqn> \[ \vec{\nabla} \cdot \left( \varepsilon_0 \frac{d\vec{E}}{dt} + \vec{J} \right) = 0  \] </div> 

So now we can replace \\( \vec{J} \\) with \\( \vec{J} + \varepsilon_0 \frac{d\vec{E}}{dt} \\), giving us our final Maxwell Equation, **M4**:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \times \vec{B} = \mu_0 \left( \vec{J} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 5: Maxwell Equation 4
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### TL;DR


