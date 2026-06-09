---
subid: em-in-matter
title: Electromagnetic Waves In Matter
topics: eto
---

In the previous section, we looked at what happens to the Maxwell equations when electromagnetic waves travel through empty space, where there is no charge (\\( \rho = 0 \\)) and therefore no current (\\( \vec{J} = 0 \\)).

Now there is a slight problem. Can you tell me what that is?

*Countdown clock tune starts playing*

Time's up! Did you spot the problem? If you selected "a good portion of waves in real life... actually no scratch that, pretty much the majority of waves in real life will be going through some sort of medium, rendering that last section completely bloody useless"... You're wrong! Yes, a common mistake that is. 

The correct answer was actually C, "a good portion of waves in real life... actually no scratch that, pretty much the majority of waves in real life will be going through some sort of medium, but that doesn't render that last section completely useless, since there are a considerable number of times where waves do travel through a vacuum, and besides, we can simply modify 'em a bit to get 'em working for waves in matter, obviously m8 why would I go through the effort of writing out this whole section if it weren't bloody possible you knobhead?"

If we wanna know how waves (and the Maxwell Equations) are affected in matter, we need to ask ourselves four very important questions:

1. What does matter do to *electric fields*?
2. What does matter do to *magnetic fields*?
3. How can we write the Maxwell equations in such a way that they still look cute and pretty, whilst still accounting for matter which would complicate things a bunch?
4. What happens to the waves at a boundary (mathematically I mean)?

To briefly address the third question, the strategy is basically to change \\( \vec{E} \\) and \\( \vec{B} \\) for a bunch of new letters, \\( \vec{P} \\), \\( \vec{M} \\), \\( \vec{D} \\) and \\( \vec{H} \\). We'll introduce 'em as we go along.

What we are trying to do is take the individual charges and spread them out like butter, to form smoother fields

### Polarisation

Remember the first question:

> What does matter do to *electric fields*?

Well let's find out. Give yourself a block of... something, whatever it is don't really matter right now (haha, it don't... *matter*! Get it? Right so the joke is we're talking about matter, as in stuff, but I used it in a different way?)

Take that block of matter and put an electric field through it. What happens?

We actually know the answer to this question, because we covered it when we talked about dielectrics and stuff. But if for whatever reason you forgot, here's a quick little recap:

Molecules, despite being charge neutral, don't necessarily have there charge distributed evenly. So for instance, water has a slightly negative side and a slightly positive side. As a result, when an electric field is applied to a water molecule, the molecule rotates, such that the positive side points in the direction of the field lines.

Even for molecules which aren't technically polarised, since the nucleus is positive and the orbiting electrons are negative, the atom still moulds itself in such a way that the orbital faces away from the direction of the field lines.

But for simplicity, we will think of a simple atom. The nucleus moves a distance \\( s \\) from the centre of the atom. This means that every atom or molecule becomes it's own little bar magnet with a \\( +q \\) on one side and a \\( -q \\) charge on the other side, which we will call a *dipole*. The charge of the poles multiplied by the distance from the centre is called the *electric dipole moment* of the atom or molecule, and points in the direction of the separation.

<div class=eqn> \[ \vec{P}_i = q\vec{s} \] </div> 

Now you might have noticed the little \\( i \\) subscripts. This is because each atom in the material will have its own polarisation, and therefore technically has be be considered seperately. However, we can still consider the total dipole moment of the block, as the sum of all the little dipole moments. 

And here we meet the first of the magic letters, \\( \vec{P} \\) for *polarisation*! This is the amount of dipole moment per unit volume, or in less nerdy vocabulary, the amount that the positive charges get pushed when the field is applied.

<div class=eqn> \[ \vec{P} = \frac{\sum \vec{P}_i}{V} \] </div> 

> \\( \vec{P} \\) is a density of electric dipoles, averaged over a volume big enough to contain many atoms but small compared to the wavelength of light (continuum limit)

#### Uniform Polarisation

Now let's think about what this means: if we have a lattice of completely neutral particles and move the positive charges to the right by an amount \\( s \\). Overall the block is still neutral, since the positive and negative charges are cancelling. However, at the two vertical edges, there is a positive charge on the right surface and a negative charge on the left surface.

On the surface we then have the *surface charge density*, \\( \sigma_P \\), which is the charge per unit area on the edge of the material.

<div class=eqn> \[ \sigma = \frac{Q}A \] </div> 

The charge can be thought of as the charge of an individual atom, times the number of atoms per unit volume, times the volume. And the *volume* can be thought of as the area multiplied by the depth of the layer. The depth of the layer is just the distance the nuclei moved from their centre, \\( s \\)

<div class=eqn> \[ \sigma = \frac{qn A |\vec{s}| }A = qn |\vec{s}| \] </div> 

But remember that the total polarisation is the sum of the polarisations from all the atoms \\( Q|\vec{s}| \\) times the volume, which gives us the same thing as this sigma:

<div class=eqn> \[ \sigma = qn |\vec{s}| = |\vec{P}| \] </div> 

Or more generally:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \sigma_P = \vec{P} \cdot \hat{n} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Surface charge density
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

#### Non-uniform

This assumes that the difference in polarisation is completely uniform, however I wanna make your life as difficult as possible, so now we are gonna consider *non-uniform* polarisation. To do this, take our long line of charges again, and split them into teeny weeny \\( dx \\) sized boxes. That way, the area is so small that the polarisation in any one of these boxes is near enough constant.

For the sake of visualisation, you can think of the charge density increasing per \\( dx \\) step, but this derivation works regardless. Each little cuboid has polarisation charge density of \\( ±P_x(x) \\), positive one one face and negative on the other face. Then the next cuboid has polarisation charge density of \\( ±P_x(x+dx) \\), positive one one face and negative on the other face.

At the boundaries, each cuboid has a charge of negative + positive. Since the charge at any point is just \\( AP_x \\), the polarisation density times area, meaning the difference in charges at the boundary is \\( AP_x(x)−AP_x(x+ dx) \\). Dividing by volume gives:

<div class=eqn> \[ \begin{align} ρ_P
    &= \frac{AP_x(x)−AP_x(x+ dx)}{A \ dx} \\[6pt]
    &= \frac{P_x(x)−P_x(x+ dx)}{dx} \\[6pt]
    &= - \frac{ \partial P_x }{ \partial x}
    \end{align} \] </div> 

Adding similar terms for \\( y \\) and \\( z \\) gives us:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ ρ_P = -\vec{\nabla} \cdot \vec{P} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Volume density of polarisation charges
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

If \\( \vec{P} \\) changes in time, charges must move, so there is a polarisation current density

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{J}_P = \frac{ \partial \vec{P} }{ \partial t } \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Polarisation current density
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

In most things, the polarisation and the electric field are proportional, meaning two things
- Firstly, they are linear, which means that as you increase the field strength, the polarisation increases by some factor of the same amount
- Secondly, they are *isotropic*, meaning that they are parallel

These together mean that for a given material:

<div class=eqn> \[ \vec{P} = \text{some number} (\vec{E}) \] </div> 

And let me save you the effort of trying to figure out what said number is:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{P} = \varepsilon_0 \chi \vec{E} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Remember, everything we have done so far is just from the material's natural reaction to the electric field that was applied, \\( \vec{E}_\text{applied} \\). When we apply a field, the polarisation caused this opposing field, \\( \vec{E}_P \\), which weakens the total field.

<div class=eqn> \[ \vec{E} = \vec{E}_\text{applied} + \vec{E}_P  \] </div> 

It turns out that \\(  \vec{E}_P = \frac{\vec{P}}{\varepsilon_0} \\), so:

<div class=eqn> \[ \vec{E} = \vec{E}_\text{applied} - \frac{\vec{P}}{\varepsilon_0} \\[6pt] = \vec{E}_\text{applied} - \chi \vec{E} \] </div> 

Combining everything gets us:

<div class=eqn> \[ \vec{E} = \frac1{1+\chi} \vec{E}_\text{applied} = \frac1{\varepsilon_r} \vec{E}_\text{applied} \] </div> 

> The material generates its own field opposing the applied one (screening), so the actual field inside is reduced by factor \\( \frac1{\varepsilon_r} \\). Large susceptibility leads to strong screening. A metal can be thought of as “infinitely polarisable”, forcing \\( E≈0 \\) inside

### Magnetisation

One down, three to go. Now we'll try and answer the next question:

> What does matter do to *magnetic fields*?

If a material is magnetised, then you can think of it as having a bunch of teeny tiny little circular current in them, due to electrons moving in circular orbits (p.s. they don't, but pretend they do for now)

Using similar logic to that of Stoke's Theorem, with uniform magnetisation, all the internal currents cancel out, leaving only one big one round the outside. That leads us to define a brand-new variable, the *magnetic moment*, which is the current around the outside, multiplies by the area, pointing normal to the surface in question

<div class=eqn> \[ m = IA = I\Delta x \Delta y  \] </div> 

And in the same way that polarisation came from electric dipole per unit volume, we can define the *magnetisation*, which is the magnetic moment per unit volume:

<div class=eqn> \[ M = \frac{m}{V} = \frac{I\Delta x \Delta y}{\Delta x \Delta y \Delta z} = \frac{I}{\Delta z} \] </div> 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{M} = \frac{I}{\Delta z} \hat{z} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Before we were able to calculate the surface charge buildup due to the electric dipoles. This time we can do a similar thing, except considering the current which flows because of the magnetisation. The current which flows due to magnetisation can then be written as:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{j}_M = \vec{M} \times \hat{n} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Non-Uniform

Time to make your life that bit harder! What is the tiny electron currents aren't uniform?

If the distance between the two is small enough, then we can write:

<div class=eqn> \[ ∆I = I(x + ∆x) − I(x) \] </div> 

Using a <span class="definition" data-definition="\[ f(x+a) \approx f(x) + a\frac{df}{dx} \]">Taylor expansion</span>

<div class=eqn> \[ I(x + ∆x) \approx I(x) + ∆x\frac{\partial I}{\partial x} \] </div> 

Therefore

<div class=eqn> \[ ∆I \approx ∆x\frac{\partial I}{\partial x} \] </div> 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{J}_M = \vec{\nabla} \times \vec{M} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### The Maxwell Equations

#### Displacement, \\( D \\)

The charge density can be split into the *bound* charge density and the *free* charge density:

<div class=eqn> \[ \begin{align}
    \rho &= \rho_f + \rho_P \\[6pt]
         &= \rho_f - \vec{\nabla}\cdot\vec{P} 
\end{align} \] </div> 

Hey, pretty cool equation! But we can make it even cooler. If we take <span class="definition" data-definition="Maxwell's First Equation \[ \vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0} \]">**M1**</span> and rearrange it, we get a new equation for charge density \\( \rho \\):

<div class=eqn> \[ \rho = \vec{\nabla} \cdot \varepsilon_0 \vec{E} \] </div> 

Then we can re-arrange to get:

<div class=eqn> \[ \vec{\nabla} \cdot (\varepsilon_0 \vec{E} + \vec{P} ) = ρ_f. \] </div> 

And we are almost there! For some reason, Maxwell really didn't like the whole "\\( \varepsilon_0 \vec{E} + \vec{P} \\)" business, so he chose to replace it with the letter \\( D \\) for displacement. Now that we have \\( \vec{D} = \varepsilon_0 \vec{E} + \vec{P} \\), that means we get:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \cdot \vec{D} = ρ_f. \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Magnetic Field Strength, \\( H \\)

We can do a similar thing with magnetism. The total charge density \\( \vec{J} \\), can also be split up, but this time into three components. There's the *free current density* (\\( \vec{J}_f \\)) which is the current we can control, and then the *bound current density*, and I know that's still only two, but that's because the bound current density can be caused by either polarisation or magnetisation. 

So we have a current density due to polarisation (which we proved earlier to be \\( \vec{J}_P = \frac{ \partial \vec{P} }{ \partial t } \\)) and a current density due to magnetisation (which we proved earlied to be \\( \vec{J}_M = \vec{\nabla} \times \vec{M} \\)) as separate terms. So then by doing the same thing as last time:

<div class=eqn> \[ \begin{align}
    \vec{J} &= \vec{J}_f + \vec{J}_M + \vec{J}_P \\[6pt]
    &= \vec{J}_f + \nabla \times \vec{M} + \frac{\partial \vec{P}}{\partial t}
\end{align} \] </div> 

Subsitute into <span class="definition" data-definition="Maxwell's Fourth Equation \[ \vec{\nabla} \times \vec{B} = \mu_0 \left( \vec{J} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right) \]">**M4**</span> to get:

<div class=eqn> \[ \begin{align}
    \vec{\nabla} \times \vec{B} &= \mu_0 \left( \vec{J} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right) \\[6pt]
    &= \mu_0 \left( \vec{J}_f + \nabla \times \vec{M} + \frac{\partial \vec{P}}{\partial t} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right)
\end{align} \] </div> 

Now I can't help but notice that there is a nabla (I mean the grad symbol, \\( \nabla \\)) on both sides. There's a nabla with a B on the left, and a nabla with a M (and a \\( \mu_0 \\)) on the right. I reckon they'd be good friends, so let's link 'em up by bringing the \\( \mu_0 \nabla \times M \\) onto the left side (i.e. subtract both sides by \\( \mu_0 \nabla \times M \\)):

<div class=eqn> \[
    \vec{\nabla} \times \vec{B} - \nabla \times \mu_0 \vec{M} = \mu_0 \left( \vec{J}_f + \frac{\partial \vec{P}}{\partial t} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right)
\] </div> 

And time for the best part of physics: *ragebaiting mathematicians*! Since both terms on the left have a curl \\( \nabla \times \\) on the front, we can take that out, so:

<div class=eqn> \[
    \vec{\nabla} \times (\vec{B} - \mu_0 \vec{M}) = \mu_0 \left( \vec{J}_f + \frac{\partial \vec{P}}{\partial t} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right)
\] </div> 

And let's divide both sides by that \\( \mu_0 \\), why not?

<div class=eqn> \[
    \vec{\nabla} \times \left( \frac{\vec{B}}{\mu_0} - \vec{M} \right) = \vec{J}_f + \frac{\partial \vec{P}}{\partial t} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\] </div> 

Cool equation! But it looks like Maxwell is back, and he doesn't particularly like that "\\( \frac{\vec{B}}{\mu_0} - \vec{M} \\)" term now, so he is choosing to replace it with \\( H \\) for... magnetic field strength? Don't question it, he kinda just named things in alphabetical order, and this was the 8th variable he names.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Either way, we now get:

<div class=eqn> \[
    \vec{\nabla} \times \vec{H} = \vec{J}_f + \frac{\partial \vec{P}}{\partial t} + \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\] </div> 

But we ain't done yet! The last two terms are actually what we get is we differentiate the displacement with respect to time, giving us the final Maxwell equation:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \vec{\nabla} \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Oh yeah, and the other two don't really change. There still ain't no magnetic monopoles

- **M1 IN MATTER** \\[ \nabla \cdot \vec{D} = \rho_f \\]
- **M2 (unchanged)** \\[ \nabla \cdot \vec{B} = 0 \\]
- **M3 (unchanged)** \\[ \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \\]
- **M4 IN MATTER** \\[ \nabla \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t} \\]

### Boundaries

#### Boundary condition for Faraday's law

Integrating <span class="definition" data-definition="\[ \vec{\nabla} \times \vec{E} = -\frac{\partial\vec{B}}{\partial t} \]">**M3**</span> and using a pinch of <span class="definition" data-definition="\[ \oint_C \vec{E} \cdot d\vec{l} = \int_S \vec{\nabla} \times \vec{E} \cdot d\vec{S} \]">Stoke's theorem</span> will get us back it's integral form:

<div class=eqn> \[
    \oint_S \vec{\nabla} \times \vec{E} \cdot d\vec{S} 
    = \oint_C \vec{E} \cdot d\vec{\ell} 
    = \oint_S -\frac{\partial\vec{B}}{\partial t} \cdot d\vec{S}
\] </div> 

Now let's say we have two materials, along this really curvy boundary. Then we'll create a *Gaussian surface*, being a rectangle with length \\( L \\) along the boundary and height \\( d \\) across the boundary. All that matters is that \\( L \\) is small enough that the electric field strength can be considered constant, and \\( d \\) is small enough that we can basically just ignore it.

Let's calculate the left integral. That is just the field strengths times the distances, meaning it is:

<div class=eqn> \[
    \oint_C \vec{E} \cdot d\vec{\ell} 
    = (E_{2, \ \parallel} - E_{1, \ \parallel})L
\] </div> 

*BTW if you are using the PX284 notes, they included this stupid \\( \mathcal{O}(d) \\) term, making the integral equal to \\( (E_{2, \ \parallel} - E_{1, \ \parallel})L + \mathcal{O}(d)\\). It's supposed to account for that tiny difference that \\( d \\) creates, but it's a bit pointless to include in a derivation if we are gonna make \\( d \\), and therefore \\( \mathcal{O}(d) \\), tend to zero anyway. IDK if they just wanted to show off the mathcal O, but you're best bet is to practically ignore it, ngl.*

Now the left hand side. The surface \\( S \\) is just the area of the rectangle we considered, which is \\( Ld \\). And in this case the integral is basically just area times everything in the integral, meaning:

<div class=eqn> \[
    \oint_S -\frac{\partial\vec{B}}{\partial t} \cdot d\vec{S}
    = -Ld \frac{\partial\vec{B}}{\partial t}
\] </div> 

And then since \\( d \\) is teeny tiny:

<div class=eqn> \[
    \oint_S -\frac{\partial\vec{B}}{\partial t} \cdot d\vec{S} = 0
\] </div> 

That means that:

<div class=eqn> \[
    (E_{2, \ \parallel} - E_{1, \ \parallel})L = 0
\] </div> 

And since \\( L \\) obviously ain't zero:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_{2, \ \parallel} = E_{1, \ \parallel} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

> At a boundary, the *tangential component of the electric field strength* doesn't change.

#### Gauss' Law

As usual, do the same with the other laws, this time <span class="definition" data-definition="\[ \vec{\nabla} \cdot \vec{D} = ρ_f \]">**M1 in matter**</span> , and using the <span class="definition" data-definition="\[ \int_S \vec{E} \cdot d\vec{S} = \int_V \vec{\nabla} \cdot \vec{E} \ dV \]">divergence theorem</span>:

<div class=eqn> \[
    \oint_V \vec{\nabla} \cdot \vec{D} \ dV = \oint_S \vec{D} \cdot d\vec{S}
    = \int \rho_f \ dV = Q_f
\] </div> 

Now take a very squished cylinder, such that only the top and the bottom have any meaningful contribution

<div class=eqn> \[
    \oint_V \vec{\nabla} \cdot \vec{D} \ dV = (D_{1, \perp} - D_{2, \perp}) A = Q_f 
\] </div> 

The total charge of the cylinder is the charge enclosed in the volume, plus the charge at the surface:

<div class=eqn> \[
    Q_f = \rho_f A h + \sigma_f A
\] </div> 

Meaning:

<div class=eqn> \[
    (D_{1, \perp} - D_{2, \perp}) A = \rho_f A h + \sigma_f A
\] </div> 

Then by giving h the same treatment as we gave d:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ D_{1, \perp} - D_{2, \perp} = \sigma_f \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Solenoidal

Then we can do the same thing using the solenoidal condition, to get:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ B_{1, \perp} = B_{2, \perp} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

The number of flux lines of \\( B \\) per unit area crossing the boundary is the same on both sides

#### njdjs

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{n} \times (\vec{H}_2 - \vec{H}_1) = \vec{j}_f  \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Conservation Equation


### TL;DR

Everything we did here was relatively easy. Just remember tho, life ain't always this easy. If you have waves travelling through a solid, we can no longer assume that \\( \rho \\) and \\( J \\) are zero

- The components of E parallel to the boundary match \\[ \hat{n} × (\vec{E}_2 − \vec{E}_1) = 0 \\]
- The perpendicular components of \\(D\\) are discontinuous by the surface charge density \\[ \hat{n} \cdot (\vec{D}_1 − \vec{D}_1) = \sigma_f \\]


