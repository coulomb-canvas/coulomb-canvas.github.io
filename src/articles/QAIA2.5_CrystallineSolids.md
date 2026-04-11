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

If the potential is 0, then the wavefunction turns out to be a simple parabola. But as potential begins to increase

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