---
subid: dirac
title: Dirac Notation
topic: qaia2
---

First, some context.

This definition might be a bit confusing, after all, wavefunction don't 'point' anywhere. But that's because we do physics, and the mathematicians didn't let us in on the little secret. You know how physicists will always do shoddy mathematics and the mathematicians will complain and we'd just ignore them? It has finally come back to bite us.

In mathematics, a vector is just any mathematical object which can reliably be written as co-ordinates, and can be anything which meets these, frankly extremely vague, criterion:

- If you take a vector and add another vector to it, you get another vector
- If you take a vector and multiply it by some number \\( a \\), you get another vector
- If you take a vector and multiply it by 1, you get the same vector back
- The vector is *associative*
- The vector is *commutative*
- It's possible for there to be 0 of that vector
- It's possible for there to be negative of that vector
- If you add two vectors together and then multiply the sum by some number \\( a \\), it's the same as if you were to take each vector and multiply them by \\( a \\) and *then* add them together

That means, any mathematical object which you can replace the word 'vector' with and still have all these statements be true can be considered vectors. The easiest example to visualise is the *polynomial*.

So something like \\( 1 + x + 3x^2 + 2x^4 \\) can be written as \\( (1, 1, 3, 0, 2) \\) (a 5-dimensional vector space in this case)

With that in mind, let's take some wavefunction \\( \psi \\). Suppose it has two possible energies, \\( E_1 \\) and \\( E_2 \\). We can then write the vector:

<div class=eqn> \[ \vec{\psi} = \begin{pmatrix} 50\% \\ 50\% \end{pmatrix} \] </div>

We can do this for as many potential states as we want.

<div class=eqn> \[ \vec{\psi} = \begin{pmatrix} 1\% \\ 1\% \\ 1\% \\ \vdots \\ 1\%\end{pmatrix} \] </div>

### The 'Ket' (State Vector)

We can write vectors in terms of 'kets', which are pretty much just a different way of writing a vector.

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

Now if you are attentice like me, you'll realise this is literally just the dot product of the two vectors. The only reason we need the complex conjugate of one is because, if there are complex numbers, then we could end up with negative distances, which is unmeasurable.

Since this is just a dot product, we can write this as:

<div class=eqn> \[  \langle \phi | \psi \rangle = \sum \phi^*(x) \psi(x) \] </div>

And that's cool and all, but it ain't bloody realistic. Why? Because wavefunctions don't typically have a finite number of possible states. So we need to sum this continuously, using an integral:

<div class=eqn> \[  \langle \phi | \psi \rangle = \int \phi^*(x) \psi(x) \ dx \] </div>

This function tells us how much of \\( | \phi \rangle \\) is contained in \\( | \psi \rangle \\), a bit like how the dot product between two vectors \\( \vec{a} \\) and \\( \vec{b} \\) it tells you how aligned the two vectors are. 

We can sorta use this to pull out information from our wavefunction. Take the spin function we had before, \\( | \psi \rangle = \frac{\sqrt{3}}2 | \\! \uparrow \rangle + \frac12 | \\! \downarrow \rangle \\). If we want to know the probability of it being up-spin, we take the inner product of \\( \psi \\) and \\( \uparrow \\):

<div class=eqn> \[ \begin{align}
 \langle  \downarrow \! | \psi \rangle &= \begin{pmatrix} 1 \\ 0 \end{pmatrix} \cdot \begin{pmatrix} \frac{\sqrt{3}}2 \\ \frac12 \end{pmatrix} \\[6pt] &= 1 \cdot \frac{\sqrt{3}}2 + 0 \cdot \frac12 \\[6pt] &= \frac{\sqrt{3}}2
  \end{align} \] </div>

Hey look at that, the inner product can be used to pick out the probability that the ket (our wavefunctions) is in the same state as the bra (the up-spin). 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \langle \psi | \psi \rangle = 1 \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: Normalisation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Since the odds of a state being itself is 100%

This makes sense for discrete basis, like up-spin and down-spin. But does this work for continuous things?

Yes we can. Think of the wavefunction as we know it before. It's a continuous function, with an infinite range of \\(x\\) values to pick from. At each value of \\( x \\), the wavefunction has its own value. That means that, when written in terms of energies, the wavefunction ket takes an infinite number of values, as does  \\( \langle x | \\). So if we want to know the wavefunction at a position \\( x \\), we can write it as:

<div class=eqn> \[ \psi(x) = \langle x | \psi \rangle \] </div>

And we can do this in many different ways:

- \\( \\langle y = 10 | \\psi \\rangle \\) would mean the wavefunction when \\( y = 10 \\)
- \\( \\langle 0, 3, 2 | \\psi \\rangle \\) means the wavefunction at the point \\( (0, 3, 2) \\)
- \\( \\langle  \\uparrow \\! | \\psi \\rangle \\) means the wavefunction if the particle has an up-spin
- \\( \\langle E | \\psi \\rangle \\) means the wavefunction at energy \\( E \\)

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

The outer product is basically just the opposite

<div class=eqn> \[ \begin{align}  | \phi \rangle \otimes \langle \psi | &= \begin{pmatrix} a_1^* & b_1^* \end{pmatrix} \otimes \begin{pmatrix} a_2 \\ b_2 \end{pmatrix} \\[6pt] &= \begin{pmatrix} a_1^*a_2 & b_1^*a_2 \\ a_1^*b_2 & b_1^*b_2 \end{pmatrix} \end{align}\] </div>

Bloody hell, what on earth is this brand new symbol we've seen?

<div class="container" style="justify-content: center">
    <div class="text">
       <table style="width: 30vw">
      <thead>
      <tr>
      <th>\( \mathbf{Multiply} \)</th>
      <th>\( a_1^* \)</th>
      <th>\( b_1^* \)</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>\( a_2 \)</td>
      <td>\(a_1^*a_2\)</td>
      <td>\(b_1^*a_2\)</td>
      </tr>
      <tr>
      <td>\( b_2 \)</td>
      <td>\(a_1^*b_2\)</td>
      <td>\(b_1^*b_2\)</td>
      </tr>
      </tbody>
      </table>
    </div>
    <div> Therefore we get \( \quad \begin{pmatrix} a_1^*a_2 & b_1^*a_2 \\ a_1^*b_2 & b_1^*b_2 \end{pmatrix}\) </div>
</div>

To be honest, this is a quite clunky way of thinking about it in my opinion. Because why think about it in terms of this new fangled way when we could just use the pseudo dot-product method. Like take this for example:

<div class=eqn> \[ | \phi \rangle \langle \psi | \chi \rangle \] </div>

Now we could take \\( | \phi \rangle \langle \psi | \\) as its own thing, create the matrix, and then apply the matrix onto the \\( | \chi \rangle \\)... *or*, we could just calculate the inner product \\( \langle \psi | \chi \rangle \\), which gives us a scalar, and then scale up \\( | \phi \rangle \\) by that amount.

<div class=eqn> \[ \bigg( |ϕ⟩⟨ψ| \bigg) |χ⟩ = \underbrace{⟨ψ|χ⟩}_{\text{scalar}} |ϕ⟩ \] </div>

#### The Projection Vector

The projection vector extracts the component of any state along \\( |n⟩ \\) and discards everything else

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \hat{P}_n =  | n \rangle \langle n | \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: The Projection Vector
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

The reason this works is, by applying it to some ket vector, like our wavefunction \\( | \psi ⟩ \\), by applying this operator we end up with:

<div class=eqn> \[ \hat{P}_n |ψ⟩ = |n⟩⟨n|ψ⟩ \] </div>

We know that \\( ⟨n|ψ⟩ \\) is the same as saying the wavefunction evaluated at \\( n \\). So that means, by applying this projection vector, we get a ket multiplied by the probability amplitude.

We can use this to get any quantity we'd like. For example, have a wavefunction:

<div class=eqn> \[ |ψ⟩ = c_1|E_1⟩ + c_2|E_2⟩ + c_3|E_3⟩ \] </div>

 and want to know the energy?

<div class=eqn> \[ \begin{align} \hat{P}_{E_1} |ψ⟩ &= |E_1⟩⟨E_1|ψ⟩ = |E_1⟩c_1 \\[6pt] &= c_1|E_1⟩ \end{align} \] </div>

#### Properties of the Projection Vector

The first property is that it's *idempotent*, which is a big grown-up word meaning if you apply the operator more than once, you will end up with the same thing back

Take the example we just did

<div class=eqn> \[ \hat{P}_{E_1} |ψ⟩ = c_1|E_1⟩ \] </div>

Now apply the operator again

<div class=eqn> \[ \begin{align} \hat{P}_{E_1} c_1|E_1⟩ &= c_1|E_1⟩ \style{opacity:40%}{\cancel{⟨E_1|E_1⟩}} \\[6pt] &= c_1|E_1⟩ \end{align}\] </div>

Hey, look at that, we're back where we started!

#### The Spectral Decomposition

If the projection vector takes a vector and turns it into the probability of getting a particular eigenvalue, this means we can build a vector back by summing up all the thingies:

<div class=eqn> \[ \begin{align} \hat{P}_{E_1} |ψ⟩ + \hat{P}_{E_2} |ψ⟩ + \hat{P}_{E_3} |ψ⟩ &= c_1|E_1⟩ + c_2|E_2⟩ + c_3|E_3⟩ \\[6pt] &= |ψ⟩ \end{align} \] </div>

We can be more general about this:

<div class=eqn> \[ \begin{align} \sum_n \hat{P}_{n} |ψ⟩ &= \sum_n |n⟩⟨n|ψ⟩ \\[6pt] &= |ψ⟩ \end{align} \] </div>

Or like this:

<div class=eqn> \[ \bigg( \style{opacity: 40%}{ \sum_n |n⟩⟨n| } \bigg) |ψ⟩ = |ψ⟩ \] </div>

By summing all the projections, you get the original function back. So if we consider it an operator, that means:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \sum_n | n \rangle \langle n | = \hat{I} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: The completeness relation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

or for a continuous vector like \\( | x \rangle \\)

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \int^\infty_{-\infty} | x \rangle \langle x | dx = \hat{I} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula X: The completeness relation
        </div><div class="formula-tooltip-desc">
            ...
        </div></span>
    </div>
</div>

Remember this, it may come in handy.

An operator will take every value and manipulate it somehow, i.e. multiplying it by some eigenvalue

<div class=eqn> \[ \hat{A}|ψ⟩ = a_n|ψ⟩ \] </div>

Then by using our identity:

<div class=eqn> \[  \hat{A} |ψ⟩ = \sum_n a_n|n⟩⟨n|ψ⟩ \] </div>

Then:

<div class=eqn> \[ \hat{A} = \sum_n a_n|n⟩⟨n| = \sum_n a_n \hat{P}_{n} \] </div>

So we can write something like the Hamiltonian as

<div class=eqn> \[ \hat{H} = E_1|E_1⟩⟨E_1| + E_2|E_2⟩⟨E_2| + E_3|E_3⟩⟨E_3| \] </div>

<div class=eqn> \[ \begin{align} \hat{H}|ψ⟩ &= E_1|E_1⟩⟨E_1|ψ⟩ + E_2|E_2⟩⟨E_2|ψ⟩ + E_3|E_3⟩⟨E_3|ψ⟩ \\[6pt] &= E_1c_1|E_1⟩ + E_2c_2|E_2⟩ + E_3c_3|E_3⟩ \end{align} \] </div>
