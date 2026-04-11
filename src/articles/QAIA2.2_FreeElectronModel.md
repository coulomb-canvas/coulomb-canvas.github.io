---
subid: free-electron
title: The Free Electron Model
topic: qaia2
---

Remember back to like, GCSE Chemistry or something, when you learnt about the plum pudding model?

In that model, it was proposed that atoms we a big ball of positive charge, with small negative charges embedded within them. A bit like a plum pudding, where the main pudding was the positive charge and the little plums in it representing the negative charge.

Now aside from the fact that this comparison is completely wasted on someone like me who has never seen a bloody plum pudding in my life, there is a slightly more relevant problem: this isn't true. 

From simple GCSE science, the same GCSE science which is teaching us this plum pudding stupidity, we know that atoms are actually made of positive nuclei being orbited by electrons. And that's great and all, except for one slight problem: that ain't bloody true either.

Despite the length of time taken for them to teach us this negative orbiting positive model, this is also not true. As we know from A-Level and University, electrons don't orbit the nucleus in cute little circles. They instead exist in these kinda containers called orbitals.

So then, since we know for a fact that the past two models are incorrect, what exactly is the point in learning them?

Simply put, it makes the calculations and stuff a tiny bit easier. And since in certain cases, systems of atoms look near enough like a positive sponge with little negative plums in it ...

### The model

Take an electron in a box. This box has some length \\( L_x \\), some width \\( L_y \\), and some depth \\( L_z \\). That means the volume of the box is just these three dimensions multiplied together, \\( V = L_x L_y L_z \\). 

This electron is very lonely and quite sad. But don't worry, we'll give it a friend soon enough. But for now it's easier to work with one of them than multiple, and since ensuring a electron has good mental help is of secondary importance to making sure I don't struggle, we'll start with only one.

Time to do a little check-up on our electron. A general particle has a wavefunction \\( Ae^{i(\vec{k}\cdot\vec{r} - \omega t)} \\), but since we are assuming the electron is in a *stationary state* (meaning its wavefunction doesn't change over time), we can ignore the t and the omega, giving us a wavefunction:

<div class=eqn> \[ \Phi(\vec{r}) = Ae^{i\vec{k}\cdot\vec{r}} =  Ae^{ik_x x}e^{ik_y y}e^{ik_z z} \] </div>

And if we want to know how much energy the electron has, we take the hamiltonian:

<div class=eqn> \[ \hat{H} = - \frac{\hbar^2}{2m_e}\nabla^2 \] </div>

This shouldn't be anything new hopefully. However, it has come to my attention that the electron really really *really* doesn't like its new home, and is trying to leave. Now normally this would be impossible, but my treasure told me that we couldn't actually afford to buy real walls, meaning we've kinda kept it in just by threatening it. Although it seems to now realise it has nothing to loose by leaving.

So it moves forward, through the imaginary barrier and... it's back inside the box?

So remember when I said that we has no means of security aside from threats? Well actually that's not quite true. We also imposed this boundary condition, that the wave function at some \\( x \\) is the same as that wavefunction at \\( x+L_x \\). 

<div class=eqn> \[ \Phi(x,y,z) = \Phi(x+L_x,y,z) \] </div>

What does that mean? In short, trying to leave the box will just put you into another box, that looks and feels exactly like the previous box.

And don't even try going through the y or z direction, because the boundaries work there too.

Cruel as this may seem, this isn't mere shadenfreude; there is some actual mathematical value to this. If we remember the formula we had for a wave function, it contained a \\( e^{ik_x x} \\) term. If I'm saying we can replace \\( x \\) with \\( x + L_x \\) without any problem, then we can do the same with the exponential

<div class=eqn> \[ \begin{align} e^{ik_x x} &= e^{ik_x (x + L_x) } \\[6pt] &= e^{ik_x x}e^{ik_x L_x} \end{align} \] </div>

If as per this equation, \\( e^{ik_x x} \\) and \\( e^{ik_x x}e^{ik_x L_x} \\) have the same value, that must mean that \\( e^{ik_x L_x} = 1 \\). And like I said, this is true for all 3 directions, so:

<div class=eqn> \[ e^{ik_x x} = e^{ik_y y} = e^{ik_z z} = 1 \] </div>

We know that exponentials become one when the exponent is a multiple of \\( 2\pi i \\). That means, with some simple rearranging:

<div class=eqn> \[ k_x = 2\pi \frac{n_x}{L_x}, \quad k_y = 2\pi \frac{n_y}{L_y}, \quad k_z = 2\pi \frac{n_z}{L_z}. \] </div>

The \\(n\\)'s are all integers, meaning you can only get discrete values of \\( k \\), and therefore discrete wavefunctions. However, if we enter k-space...

The larger the box (i.e. the larger the values of \\(L\\) are), the smaller the difference is between each value of k. So if you make the box infinitely big <span class="formula-emph">\\( \\mathbf{\\left[ L_x, \\; L_y,\\; L_z \\to \\infty \\right]}  \\)</span>, the difference between the k values becomes infinitely small, or in other words the distribution of energies becomes *continuous*.

### The Fermi Energy

Take our big positive pudding sponge with all its electrons, so that the system is at its lowest energy (i.e. the system is in its *ground state*).

Higher values of k mean higher energies. Therefore, a system which is at its *lowest* energy will also have the lowest values of k. That means in k-space, all the electrons will be within a certain radius, namely the *Fermi radius* \\( k_F \\). The spherical surface with that radius is called the *Fermi surface*.

Lucky for you, we *can* calculate the Fermi radius.

The number of states in a system is the volume of the k-space sphere divided by the volume per state. And since there are a maximum of two particles in each state (up spin and down spin).

<div class=eqn> \[ N = 2 \left( \frac{4\pi k_F^3}{3} \right) \div \left( \frac{(2\pi)^3}{V} \right) = \frac{V k_F^3}{3\pi^2} \] </div>

Then by simple rearranging, we get:

<div class=eqn> \[ k_F = \sqrt[3]{3\pi^2 \frac{N}{V}} \] </div>

If we define the density:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ k_F = \sqrt[3]{3\pi^2 \rho } \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Fermi Wave Number
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

And remember energy 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ E_F = \frac{\hbar^2}{2m_e} (3\pi^2 \rho)^{\frac23} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Fermi Energy
        </div><div class="formula-tooltip-desc">
            The energy of the highest occupied state, once as much energy as possible has been sucked out of the system
        </div></span>
    </div>
</div>

### Density of State

Here's another thing to think about. Lets say we have two energies \\( E \\) and \\( E + \\Delta E \\). How many individual states are between those two energies?

You know ...

<div class=eqn> \[ N(E) = \frac{V}{3\pi^2} \left( \frac{2m_eE}{\hbar^2} \right)^\frac32  \] </div>

That means to get the density of state...

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \begin{align} n(E) &= \frac{dN}{dE} \\[6pt] &= \frac{V}{3\pi^2} \left( \frac{2m_e}{\hbar^2} \right)^\frac32 E^\frac12 \end{align} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Fermi Energy
        </div><div class="formula-tooltip-desc">
            The energy of the highest occupied state, once as much energy as possible has been sucked out of the system
        </div></span>
    </div>
</div>

We can determine the total energy

<div class=eqn> \[ E_\text{tot} = \int^{E_F}_0 E \, n(E) \; dE \] </div>

### Other effects

Up until now we've worked with the questionable assumption that there is no thermal energy. And whilst that makes things a bit easier for now, this is obviously a practically stupid assumption, considering this is never ever the bloody case.

The solution is conceptually quite simple though: You just have to introduce a brand new "real-world" function, \\( f(E, \mu, T) \\), everytime you want to use the density of state. So instead of \\( n(E) \\) we use \\( f(E, \mu, T) n(E) \\).

<div class=eqn> \[ E_\text{tot} = \int^{E_F}_0 E \, f(E, \mu, T) \, n(E) \; dE \] </div>

### TL;DR

- I don't know what a plum pudding is.
- The free electron model takes an electron with wave function \\( \Phi(\vec{r}) = Ae^{i\vec{k}\cdot\vec{r}} \\)
- If the particle tries to leave the box, it re-enters it from the other side.
- This means that \\( e^{ik_x x} = e^{ik_y y} = e^{ik_z z} = 1 \\)
- Therefore 
- The Fermi energy of a material is the highest occupied energy when as much of the energy has been removed from the system as possible (\\(T = 0K\\)).
- The density of state describes how much the number of states changes at different energies.

And remember: ensuring an electron has good mental help is of secondary importance to making sure I don't struggle