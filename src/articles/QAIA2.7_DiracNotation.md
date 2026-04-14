---
subid: dirac
title: Dirac Notation
topic: qaia2
---

### The 'Ket' (State Vector)

A ket vector points to the right, and just means a state of some kind. 

An example of a ket vector is

<div class=eqn> \[ |\psi \rangle = \begin{pmatrix} a \\ b \end{pmatrix} \] </div>

There is no real restriction on what kinda symbol you can use. So for example:

- \\( | \psi \rangle \\) can represent a general state.
- \\( | n \rangle \\) could be an energy eigenstate with quantum number n.
- \\( | \uparrow \rangle \\) could be a spin-up state.
- \\( | \vec{k} \rangle \\) could be a momentum eigenstate with wavevector k.

As long as its a state of some kind, you can represent it this way. And just like before we can apply operaters to states. We can write the Schrodinger equation like this

<div class=eqn> \[ \hat{H} | \psi \rangle = E_n | \psi \rangle \] </div>

Exactly what \\( a \\) and \\( b \\) represent will depend on context, but in short they depend on the *probability amplitude* of the particle being in some state, such that \\( |a|^2 \\) is the probability of being in state \\( a \\) and \\( |b|^2 \\) is the probability of being in state \\( b \\). This... might take a bit of getting used to, so follow with me.

Like I said, \\( a \\) and \\( b \\) are the probabilities of being in that one state. To help demonstrate this, we'll call upon our good friend, the electron. So take the general state of an electron \\( | \psi \rangle \\). This electron could have an up spin or a down spin state:

<div class=eqn> \[ | \text{electron} \rangle = a | \text{up-spin} \rangle + b | \text{down-spin} \rangle \] </div>

This statement just means the electron has a \\( |a|^2 \\) chance of being in the up state, and a \\( |b|^2 \\) chance of being in a down state

<div class=eqn> \[ | \psi \rangle = \frac{\sqrt{3}}2 | \! \uparrow \rangle + \frac12 | \! \downarrow \rangle \] </div>

\\( |a|^2 \\) is \\( \\frac34 \\) and \\( |b|^2 \\) is \\( \\frac14 \\), meaning there is a 3 in 4 chance the electron has an upspin, and a 1 in 4 chance the electron has a down-spin

Now for some of you this might be a good enough explanation, but for people like me, it's not good enough. After all, if the ket vector is a mixture of two ... , wouldn't that mean that the \\( | \\! \\uparrow \\rangle \\) and \\( | \\! \\downarrow \\rangle \\) also are a vector with an \\( a \\) and a \\( b \\)? So what does *their*  \\( a \\) and \\( b \\) represent?

Well here's the beauty of the Dirac notation. Even for the spin state ket vectors, \\( a \\) *still* represents the probability of being spin-up and \\( b \\) *still* represents the probability of being spin-down. So for the spin-up state, since there is a 100% chance of it being spin up and a 0% chance of it being spin down, \\( a=1 \\) and \\( b=0 \\). And vice versa for the spin down state.

<div class=eqn> \[ | \! \uparrow \rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \ \text{and} \  | \! \uparrow \rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \] </div>

Now is this circular reasoning? Probably. Is it a problem? I hope not, because like half of Quantum Mechanics relies on it.

### The 'Bra' (Dual Vector)

The suspiciously names bra vector is the complex transpose of the state vector:

<div class=eqn> \[ \langle \psi | = \begin{pmatrix} a^* & b^* \end{pmatrix} \] </div>

So to use the example we had before with spins:

<div class=eqn> \[ \langle \psi | = \begin{pmatrix} \frac{\sqrt{3}}2 & \frac12 \end{pmatrix} \] </div>

To be fair this is a pretty crap example for the 'conjugate' part, since neither of the fractions are complex, but whatever.

Dual vectors are fundamentally not much different to state vectors. However, by taking the complex transpose of a ket vector, you are basically putting it into measuring mode.

### The Inner Product

Now say we have two general states, which we'll call \\( | \psi \rangle \\) and \\( | \phi \rangle \\)

<div class=eqn> \[ \begin{align} \langle \phi | \psi \rangle &= \begin{pmatrix} a_1^* & b_1^* \end{pmatrix} \begin{pmatrix} a_2 \\ b_2 \end{pmatrix} \\[6pt] &= a_1^*a_2 + b_1^*b_2  \end{align}\] </div>

This function tells us how much of \\( | \phi \rangle \\) is contained in \\( | \psi \rangle \\)

So if we want to know the wavefunction at a position \\( x \\), we can write it as:

<div class=eqn> \[ \psi(x) = \langle x | \psi \rangle \] </div>

And we can do this in many different ways:

- \\( \\langle y = 10 | \\psi \\rangle \\) would mean the wavefunction when \\( y = 10 \\)
- \\( \\langle 0, 3, 2 | \\psi \\rangle \\) means the wavefunction at the point \\( (0, 3, 2) \\)
- \\( \\langle  \\uparrow \\! | \\psi \\rangle \\) means the wavefunction if the particle has an up-spin
- \\( \\langle E | \\psi \\rangle \\) means the wavefunction at energy \\( E \\)

Now one thing to watch out for: if the inner product describes a wavefunction evaluated at a particular energy, spin, position or whatever, then what happens when \\( | \psi \rangle \\) and \\( | \phi \rangle \\) are two wave functions? Then does \\( \\langle \phi | \psi \\rangle \\) mean the wave function evaluated at \\( \phi \\)? That don't make no bloody sense...

Well, what is describes is the likelihood of \\( \psi \\) being equal to \\( \phi \\): It's like a measure of how similar two states are.

So \\( \\langle \phi | \psi \\rangle \\) is a maximum when the two wavefunctions are both high, and a minimum when any of the wavefunctions are 0.

"overlap of ∣ψ⟩ with the state of a particle exactly at x"

With that in mind, we can also determine the average value of an operator:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \langle \hat{A} \rangle = \langle \psi | \hat{A} | \psi \rangle \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Expected value
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Because what this is basically saying is 

> "How similar is the wavefunction \\( \psi \\) <span class="formula-emph">\\( \mathbf{ \left[ \ \langle \psi | \ \right]}  \\)</span> to the wavefuction after being transformed by \\( \hat{A} \\) <span class="formula-emph">\\( \mathbf{ \left[ \hat{A} | \psi \rangle \right]}  \\)</span>?"

100% similarity means the operator basically does nothing.

Try it with energy

<div class=eqn> \[ \langle E \rangle = \langle \psi | \hat{H} | \psi \rangle \] </div>

### The Outer Product