---
subid: atoms-mol
title: Atoms & Molecules
topic: qaia2
---

We've looked at individual nuclei...

How do they combine?

They use electrons!

### The Hydrogen Atom

As usual, let's start simple, with the simplest atom of them all: hydrogen. A single electron orbiting a single proton. This first electron will live in the 1s orbital. If we were to add another one, it would also go into the 1s orbital.

As we keep on adding more electrons, it will keep on filling more and more orbitals, from 2s to 2p to 3s and so on and so forth

We have our Schrodinger equation:

<div class=eqn> \[ i\hbar \frac{\partial \Psi(r, t)}{\partial t} = -\frac{\hbar^2}{2m} \nabla^2 \Psi(r, t) + V(r) \Psi(r, t) \] </div>

where

<div class=eqn> \[ \Psi(\vec{r}, t) = \Phi_{n, l, m}(r, \theta, \phi) u_\sigma e^{-\frac{iEt}{\hbar}} \] </div>

and 

<div class=eqn> \[ \Phi_{n, l, m}(r, \theta, \phi) = R_{nl}(r) Y_m(\theta, \phi) \] </div>

And for a hydrogen atom, the potential is:

<div class=eqn> \[ V(r) = -\frac{e^2}{4\pi\varepsilon_0r} \] </div>

This is all fine and dandy when there is only one elecctron. However, the moment we add more, we run into a problem. Up until now these calculations were fairly simple since we only had to consider how much the one electron

But once we add a second one, we

### Molecules

Now we have our atoms, we need to stick 'em together to make molecules.

Since the nuclei are much bigger than the electrons (about 2000 times bigger), the nuclei move pretty bloody slowly compared to the electrons. Think of the nuclei like sluggish planets and

This means that, from the perspective of the giant planet nuclei, the electrons are just a really big orbital-shaped cloud of electric charge. That means we can kind of hit the pause button, treating the atom as a stationary positive ball in the middle with some negative jewellery around it.

This is called the *Born-Oppenheimer approximation*, 

We now only need to calculate the wavefunction of this weird jewelley shape, and then if it has a lower energy than the two atoms being apart, that means they will naturally tend to that position, forming a chemical bond.

#### Covalent bonding

First let's think about our Hamiltonian. At first you might think that we know what the Hamiltonian for a particle is, \\( \\hat{H} = -\\frac{\\hbar^2}{2m}\\nabla^2 \\). Well guess what? You're wrong. Clap for yourself. No I mean it, clap for yourself.

Mock aggression aside, you're kinda on the right track, but now that we have two particles, we have to take a lot more things in to consideration. A bit like how were were trying to consider all the possible factors with the liquid drop model.

Firstly, we start with the regular kinetic energy term. It's like the one you mentioned, except since there are two particles you need two different parts:

<div class=eqn style="color: var(--accent)"> \[ \hat{H} = -\frac{\hbar^2}{2m}(\nabla_1^2 + \nabla_2^2) \] </div>

Next you also have to consider the two protons repelling each other. This is just from the coulomb potential:

<div class=eqn style="color: var(--accent)"> \[ \hat{H} = \style{opacity: 50%}{ -\frac{\hbar^2}{2m}(\nabla_1^2 + \nabla_2^2)} + \frac{e^2}{4\pi\varepsilon_0 |\vec{R}_A - \vec{R}_B| } \] </div>

But the two protons aren't the only charged particles. The electrons also have charges and coulomb potentials which need to be taken into consideration. And this is where things get a bit crazy. Because you don't only need to consider the coulomb forces between the two electrons... you need to consider the electron's coulomb forces between *everything else*.

You know what that means?! We have to consider the forces between:

- The first electron and the first proton
- The first electron and the second proton
- The second electron and the first proton
- The second electron and the second proton
- The first electron and the second electron

For every electron-proton pair, we must subtract from the total hamiltonian, because there is an attraction. However for proton-proton and electron-electron, we must add to the total hamiltonian.

Each one of these considerations will be proportional to \\( \\frac{e^2}{4\\pi\\varepsilon_0} \\), and the only difference with each of the terms is the \\( \\frac1r \\) term. So we can write it like this:

<div class=eqn style="color: var(--accent); font-size: 1.3vw;"> \[ \hat{H} = \style{opacity: 50%}{ -\frac{\hbar^2}{2m}(\nabla_1^2 + \nabla_2^2) + \frac{e^2}{4\pi\varepsilon_0 |\vec{R}_A - \vec{R}_B| }} + \frac{e^2}{4\pi\varepsilon_0} \left( - \frac1{|\vec{r}_1 - \vec{R} _A|} - \frac1{|\vec{r}_2 - \vec{R}_B|} - \frac1{|\vec{r}_1 - \vec{R}_B|} - \frac1{|\vec{r}_2 - \vec{R}_A|} + \frac1{|\vec{r}_1 - \vec{r}_2|} \right)  \] </div>

That's a pretty scary looking Hamiltonian. And this big, bad Hamiltonian has a bigger and badder solution:

<div class=llarge-eqn> \[ \Phi_{\uparrow\downarrow} = C(|\vec{R}_A - \vec{R}_B|) \; [\phi^A_{1,0,0}(\vec{r}_1)\phi^B_{1,0,0}(\vec{r}_2) + \phi^A_{1,0,0}(\vec{r}_2)\phi^B_{1,0,0}(\vec{r}_1)] \times (\uparrow\downarrow). \] </div>

And whilst it *does* seem quite scary at first, it's nothing that complicated in practice

<div class="container">
    <div class="text">
        <p> 
            What's slightly more important is what happens when you plot this energy out on a graph. At a particular radius, \( r_0 \), the energy is at it's lowest, meaning the atom is most stable. If you try to push the two atoms together, the electrostatic repulsion causes them to freak out (like charges don't like each other, remember?). Pull them apart too much, and the two charges practically forget about each other.
        </p>
    </div>
    <!-- DIVIDING LINE -->
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
                <img src="images/QAIA2/R_0 graph.png" class="pop-image" style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
                Figure 1
            </div><div class="image-tooltip-desc">
                ...
            </div></span>
        </div>
    </div>
</div>

#### Ionic Bonding

<hr>

\\( GaAs \\)

