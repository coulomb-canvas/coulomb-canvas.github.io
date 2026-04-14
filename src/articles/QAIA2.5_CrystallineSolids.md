---
subid: crystal
title: Crystalline Solids
topic: qaia2
---

The next step of our journey is trying to connect what we have learnt with macroscopic structures.

A *crystalline solid* (or just *crystal* if you like) is a solid made up of an atoms on a periodic array. What the heck does that mean? Say you have something like table salt (sodium chloride, \\( NaCl \\)). It's made up of a large array of sodium ions next to chlorine ions. This pattern repeats practically infinitely, such that the pattern looks the same, no matter where you view it from.

Whenever we have such a structure, we can call it a crystal. These crystals can be separated into two components: the lattice and the basis.

The *basis* is the repeating unit. So in this case, a single \\( NaCl \\) pair makes the basis.

The lattice describes the points at which you put all these bases on. Take an image of the sodium chlorine crystal, and put a dot on every chlorine ion. That giant mesh of dots is the lattice.

### (Bravais) Lattices

<div class=eqn> \[ \vec{R}_{n_1, \ n_2, \ n_3} = n_1 \vec{a} + n_2 \vec {b} + n_3 \vec{c} \] </div>

But more importantly, there's a special kind of lattice which we'll have to consider: the *Bravais lattice* (pronounced bruh-VAY).

...

The lattice being periodic is very important. If the lqattice is periodic, then all of its properties, such as electron density and its potential, are also periodic. Let's say that each cell in the lattice is a distance \\( a \\) apart. Because we are saying the function is periodic, that means \\( f(x) = f(x + na) \\). Now I wonder, what mathematical tool can we use to approximate a function which is periodic?

That's right, a *fourier series*!

Hopefully you remember how to make one o' these.

<div class=eqn> \[ f(x) = \sum_x f_n e^{iG_nx} \] </div>

For simplicity, we'll replace \\( \\frac{2\\pi n}{a} \\) with \\(G_n\\). Notice that if you put that into the exponential as so:

<div class=eqn> \[ e^{iG_na} = 1 \] </div>

Remember this identity, it will come in handy later

And you may wonder, who the hell this new fella \\( f_n \\) is, being as last time we used fourier series we had \\( a_n \\) and \\( b_n \\). In short, when you use a complex fourier series, \\( a_n \\) and \\( b_n \\) do a little fusion dance to form a new complex variable, where:

<div class=eqn> \[ f_n = \frac12 (a_n - ib_n) \] </div>

It's just a little big more compact, that's all.

Remember our exponential identity from earlier, where \\( e^{iG_na} = 1 \\)? Well I'd hope so because it was literally from like half a second ago, I'd like to think your memory ain't that rubbish. 

Anyway, why is this useful to us? Remember how we defined a space on the lattice using \\( \\vec{R}_{n_1, \\ n_2, \\ n_3} = n_1 \\vec{a} + n_2 \\vec {b} + n_3 \\vec{c} \\)? Well we can do a similar thing in reciprocal space, where instead of using a regular \\( G_n \\), which would only work in one direction, we can turn \\( G \\) into a nice 3-dimension vector:

<div class=eqn> \[ \vec{G}_{m_1, \ m_2, \ m_3} = m_1 \vec{A} + m_2 \vec {B} + m_3 \vec{C} \] </div>

But why the flippety flip is this useful?

This means then the points on the lattice will fit this inequality:

<div class=eqn> \[ e^{i [\vec{G}_{m_1, \ m_2, \ m_3} \cdot \vec{R}_{n_1, \ n_2, \ n_3}]} = 1 \] </div>

### Crystalline Potential

Since potential is periodic:

<div class=eqn> \[ V(\vec{r}) = V(\vec{r} + \vec{R}_{n_1, \ n_2, \ n_3}) \] </div>

Don't get the r's mixed up:

Anyway, we can fourier approximate the potential. And a word of warning: up until now we've been creating these series by adding together single sum. However since our potential will depend on 3 variables, we have to make 3 sums:

<div class=eqn> \[ V(\vec{r}) = \sum_{m_1} \sum_{m_2} \sum_{m_3} V_{m_1, \ m_2, \ m_3} e^{i \vec{G}_{m_1, \ m_2, \ m_3} \cdot \vec{r}} \] </div>

Then we use the Schrodinger equation to determine the wavefunction.

#### Perspective 1: Tight Binding Model

We have two friendly atoms who are here to help us with our demonstration.

From chemistry we know that electrons exist in unique energy states, such as 1s, 2s, 2p and so on. Now in general, just because two electrons are in the same energy state doesn't mean they have the same energy. Bigger atoms will have a lower 1s energy than smaller atoms.

But let's say these two atoms are twins. Like two helium atoms. Now both of them have the same 1s energy.

Pauli's Exclusion principle tells us that we can't have two electrons in the exact same state. Meaning that if two electrons have the same energy, they can't have the same location, and if they *do* by some miracle have the same location, then they *definitely* cannot have the same spin. So for the two atoms in a single atom, even though they are in the same location (same 1s orbital), one is spin up and the other is spin down.

Now for the time being there is no problem, because the two atoms, despite having electrons with the same energies and spins, are in different locations.

However, that's boring. I wonder what would happen if I were to push these two atoms together!

As the atoms get closer together, their wavefunctions begin to merge into each other, meaning eventually you'll get to the point where the electrons' wavefunctions begin to merge. The closer the two atoms become, the more they combine.

If the two atoms have electrons whose wavefunctions are merged, then there begins to be a chance that their probability densities could place them in the same state.

There is a slight problem though. I mean, I don't know if you were paying attention to anything I've been saying over the past like 4 topics, or even what I was talking about literally like half a second ago, there is something called the Pauli Exclusion Principle, meaning... this can't bloody happen.

So instead of actually overlapping, the electrons decide to create two brand new states for them to sit in. One of them has slightly higher energy (the bonding state), and the other has very slightly lower energy (the antibonding state). That means the 1s orbital has now been split into two states

But why stop at two? Why not add another atom to the mix and see what happens there?

Back when we had 2 atoms, our 1s orbital split into 2 states. So take a long hard think: If we have *3* atoms, how many states will our 1s orbital split into?

That's right, *three*!

So far so good. However, as of right now there is no hard limit on what two energies the two electrons take. All that matters is that one increases in energy by about the same amount as the other decreases; moreover, the closer the two atoms become the higher the energies, but you can only put them so close together before other forces take priority.

So then, instead of having only two atoms, what if we added a lot. Like a CRAP tonne, something to the order of a few SEXTILLION atoms?!

We've seen that for \\( N \\) particles, the orbitals split into \\( N \\) distinct states. So with \\( N \\sim 10^{22} \\) particles all pushed close together, the orbital would be split into about \\( 10^{22} \\) different states. Once more, the energies between them would all be so small, that it would seem less like the orbital being split into \\( 10^{22} \\) different states and more like the orbital becoming a *continuous band*.

And this will happen for each orbital. The 1s orbital becomes the 1s band, the 2s orbital becomes the 2s band. So instead of discrete orbitals with discrete energies, you now have bands.

Having said that, assuming the bands aren't too thick or close together, there could still a gap between the two orbital bands. This is called the *band gap*.

If the band gap is too big, then electrons can't easily go from one band to the other. This creates an insulator

If there is no band gap, due to the bands being too thick and therefore overlapping, the electrons can move freely between orbitals. This forms a conductor.

*Remember this, it will come in handy soon*

#### Perspective 2: Nearly Free Electron Model

This time, start with completely free electrons. And you might be wondering "well if the electrons are completely free, then why the bloody hell is it called the *nearly* free model?" Goddamn will you relax? It'll make sense in a bit, just chill out for now.

Now say there is absolutely no potential. That means the energy is just the energy is proportional to \\( k^2 \\) <span class="formula-emph">\\( \\mathbf{\\left[ E(k) = \\frac{\\hbar^2}{2m} k^2 \\right]}  \\)</span>. So if we were to plot energy \\( E \\) against wavenumber \\( k \\), we'd get our regular parabola shape we would usually get with \\( y = x^2 \\) type graphs.

Now, we introduce a weak potential, \\( V( \\vec{r} ) \\). For the most part, the energy doesn't change.

However, at the boundaries of the Brillouin zones, something interesting happens. These *gaps* (hey, where have we heard about gaps before...) begin to appear. For the most part, these energy-against-wavenumber curve is near enough parabolic, so it nearly acts like a free electron. But there are these continuities.

So what the hell is going on? First, some context. Remember we are dealing with a lattice with a perfectly periodic patterns. That means we can think of this big block of crystal as a bunch of flat layers (or *planes* to be more precise in this context) all stacked on top of each other. More importantly, each plane can reflect light, as though it were a regular mirror or something.

So take our electron. We know we can represent the incident wave as \\( e^{ikx} \\), and since \\( k = ±n \\frac{\\pi}a \\), we can write this as \\( e^{\\frac{i\\pi x}{a}} \\). That means the wave which is reflected off the planes just becomes \\( e^{-\\frac{i\\pi x}{a}} \\)

Final thing, bare in mind that just because an electron hits a plane, doesn't automatically mean its reflected. A bit like light optics, some of the wave is transmitted through. Then that transmitted electron-wave hits the next plane and has a chance of being reflected back or transmitted, and then *that* transmitted electron-wave has a similar circumstance, and so on and so forth. This keeps happen, such that by the time you get to the end of the crystal, practically all the electron wave is reflected back.

That thing of the electron being reflected back on different layers is key. Like I said, the electron is kinda split up into different parts here, but I'd kinda sorta like my electron to return whole, y'know what I mean?

Now this is possible... on one condition. When each transmitted electron-wave returns, it must be in phase with the first reflected electron-wave, so that they constructively interfere and add back up into its original wavefunction. If the transmitted waves come back with even a slight phase difference, the wave will be cancelled out.

For this to happen, the wavelength of the electron must be *exactly* the same as the distance between each plane.

If we are lucky and we do get this perfect frequency, then that means we end up with a wave going into the crystal and another wave of the same frequency coming out of it. That produces a *standing wave*!

Now if we add up the forward going wave and the backward going wave, we can end up with two possible solutions. The first is this one:

<div class=eqn> \[ \begin{align} \psi_+ &= e^{\frac{i\pi x}{a}} + e^{-\frac{i\pi x}{a}} \\[6pt] &= 2\cos{\frac{\pi x}{a}} \end{align} \] </div>

"Hold on a second, you said there are *two* solutions? Why, isn't this the only way to add up the two wavefunctions?"

Yes, but you are forgetting something. These wavefunctions take \\( k \\) to be \\( k = + \\frac{\\pi}a \\). But remember that \\( k \\) can actually be positive *or* negative. So if we now take the value of \\( k \\) for the reflected wave to be \\( k = - \\frac{\\pi}a \\) instead (meaning it comes \\( \\pi \\) radians out of phase), we will end up with something different:

<div class=eqn> \[ \begin{align} \psi_- &= e^{\frac{i\pi x}{a}} - e^{-\frac{i\pi x}{a}} \\[6pt] &= 2i\sin{\frac{\pi x}{a}} \end{align} \] </div>

Now any one of these two standing waves could be present, it just depends on the system. However, each on has different effects. We know that if we want to get the probability of a particle of a particular wavefunction being in a certain area, we just take the modulus-squared. So let's do that and see what we get, starting with \\( \\psi_+ \\):

<div class=eqn> \[ |\psi_+|^2 = 4\cos^2{\frac{\pi x}{a}} \] </div>

A cos function (and a \\( \\cos^2 \\) function) peaks every \\( \\pi \\), starting from 0. In this case it will peak at values of \\( \\frac{\\pi x}{a} \\) which are equal to \\( 0 \\), \\( \\pi \\), \\( 2\\pi \\) etc, which is when \\( x = 0, \\ a, \\ 2a, \\ \\text{etc} \\). This means it's peaking *on the atoms*.

On the atoms, there is negative potential energy (due to the attraction from the nucleus). This means the overall energy is slightly lower

Compare that with 

<div class=eqn> \[ |\psi_-|^2 = 4\sin^2{\frac{\pi x}{a}} \] </div>

A sin function (and a \\( \\sin^2 \\) function) peaks every \\( \\pi \\), starting from \\( \\frac{a}2 \\). In this case it will peak at values of \\( \\frac{\\pi x}{a} \\) which are equal to \\( \\frac{\\pi}2 \\), \\( \\frac{3\\pi}2 \\), \\(\\frac{5\\pi}2\\) etc, which is when \\( x = \\frac{a}2, \\ \\frac{3a}2, \\ \\frac{5a}2, \\ \\text{etc} \\). This means it's peaking *in between the atoms*.

On the atoms, there is negative potential energy (due to the attraction from the nucleus). This means the overall energy is slightly lower than between the atoms.

Once again, we arrive at two states, one with slightly lower energy and one with slightly higher energy

### Bloch Wave Functions

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Phi_{n, k} = e^{i\vec{k}\cdot\vec{r}} u_{n, k} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Think of it like this. The electron is a single wave, which we know is just \\( e^{i\\vec{k}\\cdot\\vec{r}} \\). Then the potential of the crystal causes that single electron wave to wobble.

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \Phi_{n, k}(\vec{r} + \vec{R}_{n_1, \ n_2, \ n_3}) = e^{i\vec{k}\cdot \vec{R}_{n_1, \ n_2, \ n_3}} \Phi_{n, k}(\vec{r}) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 2: Bloch's Theorem
        </div><div class="formula-tooltip-desc">
            Moving an electron a distance \( \vec{R} \) doesn't change the magnitude of the wavefunction, it only shifts its phase.
        </div></span>
    </div>
</div>

By the way, this means that, in a perfect crystal (one with no impurities, ensuring the pattern is 100% periodic) electrons can travel a long distance. The periodic potential will only shift the wavefunction a bit, but its magnitude is the same.
