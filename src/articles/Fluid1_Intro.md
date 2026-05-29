---
subid: fluid-intro
title: Introduction to Fluid Mechanics
topics: fluid
---

### What is a fluid?

There are a bunch of different definitions, but for now we can go with this one:

> A substance which fills up a vessel with no fixed shape

So you know how in a solid, the molecules are in like a fixed lattice and they can't really move 'cus of the intermolecular forces? Well in a fluid, the particles are near enough free to move. So this could be either a liquid or a gas.

There are a few ways we can describe a fluid:

1. Try and look at every single individual particle, and their individual positions and speeds. 

Then by using certain equations of motion, we can predict where all the particles are gonna move. In principle this gives us a very precise model of the system. There is one problem though, i.e. there are a *lot* of bloody particles. And you have to somehow consider *all* their positions and *all* there speeds and collisions and interactions all at once? Ain't *nobody* got time for that m8!

So if there is a pretty small amount of particles, this works just fine. But for anything above like \\( N = 10 \\), this becomes a massive pain in the arse

2. The kinetic approach: We use some distribution function \\( f( \vec{r}, \vec{v}, t ) \\) which predicts the way the particles move.

This magic function \\( f( \vec{r}, \vec{v}, t ) \\) tells us the number of a certain type of particle (be that electrons, oxygen molecules, or whatever) at a particular time, velocity and position.

Now of course, the next logical question to ask is "well what exactly is \\( f( \vec{r}, \vec{v}, t ) \\)?

Technically, this is the Boltzmann equation

<div class=eqn> \[ \frac{\partial f}{\partial t} + \frac{\vec{p}}{m} \cdot \nabla_{\vec{r}} f + \vec{F} \cdot \nabla_{\vec{p}} f = Q(f,f)  \] </div> 

Again, this works like a charm if we can actually use it, but let's be honest... You cannot be arsed to try and figure out what this equation is saying, can you? I know you didn't even try to actually read it, you're eyes just skimmed past it.

This equation is bloody 7-dimensional (3 space dimensions, 3 momentum dimensions, 1 time dimension), that's a lot of bloody dimensions, certainly way more than I can be arsed to deal with.

3. The continuous matter approach 

In this case, we think of the fluid as one big flowy thing with density \\( \rho \\), pressure \\( P \\), temperature \\( T \\) and a perhaps less familiar quantity, *bulk velocity* \\( \vec{u} \\). The bulk velocity tells us the speed of the *flow*, not to be confused with the speed of individual particles.

From a mechanical perspective:

> A fluid is a substance which cannot resist shear force without motion, and doesn't return to the initial state when the force is removed

### When can we use fluid mechanics?

Density is the mass of the fluid over the volume the fluid takes up:

<div class=eqn> \[ \rho = \frac{M}V  \] </div> 

Or if you wanna be a nerd

<div class=eqn> \[ \rho = \lim_{\Delta V \to 0} \frac{\Delta M}{\Delta V}  \] </div> 

And I know what you may or may not be thinking (especially if you are decently familiar with the quantum modules): "well that don't make no bloody sense, volume going to zero? But that would force electrons 'n stuff to be forced into the same state, which is possible, which would create degeneracy pressure, meaning the volume wouldn't actually be zero 'cus that can't happen!"

And my answer... quit being a geek. Quantum mechanics didn't really exist at the time fluid mechanics was developed, and therefore it won't actually make a difference whether we consider it or not. Of course in practice, once you go below a certain volume (which we will call \\( \Delta V^* \\)), the quantum effects kick in and start to mess everything up. Having said that, fluid mechanics works for any volume above \\( (\Delta V^*)^\frac13 \\).

But just to prove the first point I made, for you average, friendly neighbourhood fluid, \\( (\Delta V^*)^\frac13 \\) is about 1 picometre, which is bloody tiny, so quit your whinging and just deal with it, k m8?

The mean free path length is the average distance a particle moves without colliding

<div class=eqn> \[ \text{Kn} = \frac{\lambda}L  \] </div> 

If \\( \text{Kn} \\) is small enough, then fluid mechanics works just fine. To be fair, in many cases there's not much point in actually calculating it, all we need to know is that the mean free path length is way smaller than the container. For example, at atmospheric pressure, the mean free path is about 0.1 micrometres. I'm sure that your room is probably bigger than that. Therefore, fluid mechanics can be applied to your room!*

### Stress and strain

#### Stress

*Stress* is a measure of what an object ‘feels’ so to speak. Like if someone were to press on your skin, that feeling of a force being applied is the stress. It is defined mathematically as the force per unit area:

<div class=eqn> \[ \tau = \frac{F}A  \] </div> 

And I know what you are thinking: ‘force per unit area? Ain’t that the pressure?’ And to a certain extent, you are exactly right! However, to another extent, you are wrong, and I'm a pessimist, so I'm gonna focus on the negative and say you're wrong, k? Cheers, m8!

What differentiates pressure and stress is the *direction* in which it is applied. Pressure acts in *all directions*. So like if you submerge a ball in water, there is *pressure* coming from above it, below it, in front of it, behind it, everywhere Stress, however, is *one-directional*. If you push down on a table, you are applying stress to the table rather than pressure, as it is only in one direction, i.e., down.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ τ_\text{solid} = G\frac{\partial X}{\partial y} = Ge \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

#### Strain

Next up, strain is a measure of how much something deforms when a force is applied. So going back to our skin example, how much your skin gets squished compared to the table is an indicator that your skin has a higher strain, e

***

For a solid, when the stress is removed, it returns back to its original shape. Moreover, so long as the object is deformed, it is undergoing continuous stress.

For a fluid, however, once it has been deformed, the strain keeps on increasing, and it gets more and more deformed

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ τ_\text{fluid} = \mu\frac{de}{dt} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            The stress in a fluid is proportional to the rate of change of the strain
        </div></span>
    </div>
</div>

Since \\( e = \frac{\partial X}{\partial y} \\), that means

<div class=eqn> \[ τ_\text{fluid} = \mu\frac{d}{dt} \left( \frac{\partial X}{\partial y} \right) \] </div> 

Switch the t and the y around, because we can do that apparently:

<div class=eqn> \[ τ_\text{fluid} = \mu\frac{d}{dy} \left( \frac{\partial X}{\partial t} \right) \] </div> 

Now we have a dX/dt, which is just the x-component of velocity:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ τ_\text{fluid} = \mu\frac{d}{dy} u_x \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 4:
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

### Newton's law of Viscosity

Let's take a fluid flowing between two parallel plates, and the upper plate is moving with speed \\( \vec{u} \\). We will say that this flow is laminar, meaning the rate of flow changes with height.

Once the flow becomes steady...

The top plate is obviously forcing the water. The amount of force will be larger if the water is being moved faster, and larger for a larger plate:

<div class=eqn> \[ F \propto \frac{u_x A}{y} \] </div> 

Now u_x/y ... put some partial derivatives on that, because why the hell not?

<div class=eqn> \[ \frac{u_x}{y} \propto \frac{\partial u_x}{\partial h} \] </div> 

That means

<div class=eqn> \[ F = \mu A \frac{\partial u_x}{\partial h} \] </div> 

If the viscosity doesn't depend on the bulk velocity of the fluid, then the fluid is *Newtonian*. If it *does* depend on the bulk velocity, then it is a *non-Newtonian* fluid.

One more thing to note: if you interact with a fluid quickly enough, it will behave like a solid for a brief moment before the mass dissipates again.

### Fluid elements

A *fluid element* is a tiny chunk of fluid which takes up some shape, like a cube for instance. The shape moves with the flow, and might become deformed over time, but the mass inside the element doesn't change. There are 2 flavours of fluid elements:

1. **Lagrangian**: there is no movement of mass in or out of the fluid
2. **Eulerian**: This is a fluid element in a fixed location, mass may flow in or out.

A *streamline* is the fluid mechanical cousin of electric and magnetic field lines

> A *streamline* - is a curve which, at a fixed time, in each location, is tangential to the fluid velocity \\( \vec{u} \\)

Let \\( dr \\) be a teeny tiny distance parallel to the streamline:

<div class=eqn> \[ d\vec{r} = \vec{u} \ d\lambda \] </div> 

Therefore:

<div class=eqn> \[ d\lambda = \frac{dx}{u_x} = \frac{dy}{u_y} = \frac{dz}{u_z} \] </div> 

### TL;DR