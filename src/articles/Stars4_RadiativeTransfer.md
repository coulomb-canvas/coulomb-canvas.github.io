---
subid: radiate
title: Radiative Transfer
topics: stars
---

### Radiative transfer

Go back to last topic. Take the emission intensity, and move the dz to the other side. You get this total:

<div class=eqn> \[ dI_\lambda = -\kappa_\lambda \rho I_\lambda dz + \varepsilon_\lambda \rho dz \] </div>

Next, divide both sides by \\( \kappa_\lambda \rho \ dz \\)

<div class=eqn> \[ \frac1{\kappa_\lambda \rho} \frac{dI_\lambda}{dz} = - I_\lambda + \frac{\varepsilon_\lambda}{\kappa_\lambda} \] </div>

Now set \\( \frac{\varepsilon_\lambda}{\kappa_\lambda} \\) to \\( S_\lambda \\), which we will call the source function. That leaves us with this equation:

<div class=eqn> \[ - \frac1{\kappa_\lambda \rho} \frac{dI_\lambda}{dz} = I_\lambda - S_\lambda \] </div>

But remember that \\( \kappa_\lambda \rho \ dz \\) is the definition for optical depth, which means we can instead write this as:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dI_\lambda}{d\tau_\lambda} = I_\lambda - S_\lambda \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Radiative transfer equation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

If I is greater than S, that means that I decreases with z. Then by the same logic, if I is less than S, then I increases with z. That basically means I converges to the source function.

This is a cool formula and all, but what does this actually mean for a star?

#### Local Thermal Equalibrium (LTE)

This takes place in a region small enough that temperature is near enough constant (obviously, how the hell would there be an equilibrium if it weren't bloody constant?) and the gas is dense enough that the particles collide with each other, so that the velocities of the particles follow the Maxwell-Boltzmann distribution. The photons need to have a decently small mean free path so that they interact within the given system (relative, of course).

And here's the best part, assuming our body is optically thick and doesn't have a temperature of 0K, then it emits black body radiation, which means LTE was just BB radiation all along! This means 

<div class=eqn> \[ S = B \] </div>

Next, since we are in equilibrium, the absorption and the emission must be the same (or else stuff is going in or leaving, which means it ain't in bloody equilibrium). This means the flux is constant everywhere:

<div class=eqn> \[ F = \text{constant} = \sigma T^4 \] </div>

So by using this LTE framework, the RTE is less of a pain in the arse! Let's give it a go, shall we?

The RTE is:

<div class=eqn> \[ \frac{dI}{d\tau} = I - S \] </div>

Since S = B:

<div class=eqn> \[ \frac{dI_\lambda}{d\tau_\lambda} = I_\lambda - B_\lambda \] </div>

Multiply everything by \\( e^{-\tau} \\)

<div class=eqn> \[ \frac{dI_\lambda}{d\tau_\lambda}e^{-\tau} = I_\lambda e^{-\tau} - B_\lambda e^{-\tau} \] </div>

Why is this better? Well, notice that, by the chain rule:

<div class=eqn> \[ \frac{d}{d\tau_\lambda}(Ie^{-\tau}) = \frac{dI_\lambda}{d\tau_\lambda}e^{-\tau} -I_\lambda e^{-\tau} \] </div>

And therefore:

<div class=eqn> \[ \frac{d}{d\tau}(Ie^{-\tau}) = - B e^{-\tau} \] </div>

Then integrate:

<div class=eqn> \[ \begin{align}
    \bigg[Ie^{-\tau}\bigg]^0_{\tau'} &= - B \int^0_{\tau'} e^{-\tau} \\[6pt]
    I(0) - \style{opacity: 30%}{\cancel{I(\tau')e^{-\tau}}^{\ = \ 0}} &= B \bigg[e^{-\tau} \bigg]^0_{\tau'} \\[6pt]
    \end{align} \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ I(0) = B(1 - e^{-\tau'}) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

So then for a gas which is super duper thick, meaning \\( \tau \\) is very large:

<div class=eqn> \[ I(0) = B \] </div>

This explains emission lines, where there's a hot gas which isn't dense enough

### Radiation Pressure

Since photons have momentum, they also exert pressure (albeit a teeny tiny pressure) whenever their momentum changes. Say for example we have a photon bouncing of a surface. The momentum changes from \\( p_z \\) to \\( p_z^\prime \\).

<div class=eqn> \[ \begin{align}
    \Delta p_z &= p_z^\prime - p_z \\[6pt]
    &= \frac{E\cos{\theta}}c - \frac{-E\cos{\theta}}c \\[6pt]
    &= \frac{2E\cos{\theta}}c
    \end{align} \] </div>

Remember from ages ago, that \\( dE_\lambda =  I_\lambda \cos{\theta} \ dA \ dt \ d\lambda \ d\Omega \\), so:

<div class=eqn> \[ dp_z = \frac2c I \ dA \ dt \cos^2{\theta} \ d\Omega \] </div>

Since force is \\( \frac{dp}{dt} \\) and pressure is \\( \frac{dF}{dA} \\)

<div class=eqn> \[ P_\text{radiation} = \int \frac2c I \cos^2{\theta} \ d\Omega \] </div>

This is for a solid reflecty thing though. For a gas, there is none. So that means you must remove the 2 before integrating. Evaluating it gives us:

<div class=eqn> \[ \begin{align}
    P_\text{radiation} &= \bigg| \frac1c \int_\text{sphere} I \cos^2{\theta} \ d\Omega \bigg| \\[6pt]
    &= | \frac{I}c \int_0^{2\pi} d\phi \int_0^{\pi} \cos^2{\theta} \sin{\theta} \ d\theta | \\[6pt]
    &= \frac{2\pi I}c \bigg[ \frac13 \cos^3{\theta} \bigg]_0^\pi
    \end{align} \] </div>

That gives us:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P_\text{radiation} = \frac{4\pi}{3c} \langle I \rangle \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Remember that for a black body, \\( I = \frac{\sigma T^4}{\pi} \\), so:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ P_\text{radiation, Black Body} = \frac{4\sigma}{3c} T^4 = \frac13 a T^4 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

*Damn, that's a long-ass subscript. Something about writing "rad, bb" doesn't feal right though...*

### Temperature structure near the stellar surface

Now that we have \\( P_\text{radiation} = \frac{4\pi}{3c} \langle I \rangle \\), we can use this to write something about the flux. This is because this is a pressure from photons. So if that changes, then the amount of photons must be changing, meaning the intensity must also be changing

<div class="container">
    <div class="text">
        Consider a box of like gas or something, with radiation with flux \( F \) entering one end (at \( z \)) and coming out the other end ( at \( x + dz \)). There is also pressure on either side of this box \( P_\text{rad}(z) \) and \( P_\text{rad}(z + dz) \). As \( z \) increases, \( F \) decreases (so now the flux is \( F - dF \), because no light is going in, it can only have been stopped), and so does the pressure. (The change in pressure is related to the change in flux)
    </div>
    <div class="image">
    <div class="image-floater">
        <div class="image-box">
        <img src="images/Stars/Grey atmosphere.png" class="pop-image" style="width: 300px"/>
        </div>
        <span class="image-tooltip" style="left:-120%;"> <div style="color: #006aff; 
        font-size:45px; text-decoration: underline; text-underline-offset: 7px;">
        Figure 1: Grey atmosphere</div><div style="color:white; font-size:20px; line-height: 1.2;">
        ...</div></span>
    </div>
    </div>
</div>

Everything happening is per unit area

At the surface there is no energy generation, just photons trying to get out. So most of this change in flux will be as a result of absorption

We know that the energy of a photon is given by \\( E = pc \\), meaning force (being the rate of change of momentum, where \\( p = \frac{E}{c} \\)) is \\( \frac{dF}c \\). The flux is the rate of change of energy, given by \\( F = \frac{dE}{dt} \\).

The rate of change of pressure is the same as the force here (using the same logic as with hydrostatic equilibrium), so \\( \frac{dP}{dz} dz = \frac{dF}c \\).

Assuming there is only absorption taking place, we can swap flux and intensity. So then our absorption equation from earlier (\\( \frac{dI}{dz} = -\kappa \rho I \\)) then becomes \\( \frac{dF}{dz} = -\kappa \rho F \\). With some simple rearranging, it becomes:

<div class=eqn> \[ \frac{dF}{F} = -\kappa \rho \ dz \] </div>

Then replace \\( dF \\) with \\( c \frac{dP}{dz} dz \\)

<div class=eqn> \[ \frac{dP}{dz} dz = - \frac{\kappa \rho F}{c} \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dP}{d\tau} = \frac{F}{c} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

Integrating gives us

<div class=eqn> \[ P = \frac1c F \tau + A \\[6pt] \therefore \quad \frac{4\pi}{3c} \langle I \rangle = \frac1c F \tau + A \] </div>

Now we need some boundary conditions to be able to get the constant of integration. At the top of the atmosphere, the optical depth is gonna be zero. Also the average intensity will be the intensity out take away the intensity in all over 2 (or just *intensity out over two*, since we assume there is no intensity in at the top of the atmosphere).

The intensity out is \\( \frac{F}{\pi} \\), which gives us a constant of integration:

<div class=eqn> \[ A = \frac{2F}{3c} \] </div>

Putting that in gives us:

<div class=eqn> \[ \frac{4\pi}{3} \langle I \rangle = F(\tau + \frac23) \] </div>

For a black body, \\( F = \sigma T_\text{eff}^4 \\), and \\( I = S = B = \frac{\sigma T^4}{\pi} \\)

<div class=eqn> \[ \frac{4\pi B}{3} =  \sigma T_\text{eff}^4 (\tau + \frac23) \] </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ T^4 = \frac34 T_\text{eff}^4 (\tau + \frac23) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>

T is at the effective temperature when \\( \tau = \frac23 \\), meaning the surface we see is the point where \\( \tau = \frac23 \\).

#### Limb darkening

We see cooler temperature (redder) at the edges

### TL;DR

- 
