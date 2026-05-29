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

If a material is magnetised, then you can think of it as having a bunch


### TL;DR

Everything we did here was relatively easy. Just remember tho, life ain't always this easy. If you have waves travelling through a solid, we can no longer assume that \\( \rho \\) and \\( J \\) are zero


