import matplotlib.pyplot as plt
import numpy as np

plt.style.use('dark_background')

'''
fig, ax = plt.subplots(figsize=(6,6))
# Vectors
ax.arrow(0, 0, 2, 0, head_width=0.1, length_includes_head=True, color='red', linewidth=4, zorder=10)
ax.arrow(0, 0, 1.4, 1.1, head_width=0.1, length_includes_head=True, color='yellow', linewidth=4, zorder=10)
ax.text(2.1, -0.05, r"$\vec{a}$", color='red', fontsize=20)
ax.text(1.5, 1.1, r"$\vec{b}$", color='yellow', fontsize=20)
# Angle arc
theta = np.linspace(0, np.arctan2(1.1, 1.4), 40)
ax.plot(0.7*np.cos(theta), 0.7*np.sin(theta), color='white')
ax.text(0.4, 0.1, r"$\theta$", color='white', fontsize=25)

# Calculate projection of b onto a
a = np.array([2, 0])
b = np.array([1.4, 1.1])
a_hat = a / np.linalg.norm(a)
dot_magnitude = np.dot(a_hat, b)

offset = -0.1  # negative for downward shift

# Draw projection line, shifted down
ax.plot([0, dot_magnitude*a_hat[0]], 
        [offset, dot_magnitude*a_hat[1]+offset],
        color='orange', linewidth=3)

# Move label down along with the line
ax.text(dot_magnitude*a_hat[0]/2 - 0.2, dot_magnitude*a_hat[1] + offset - 0.25,
        r"$\vec{a}\cdot\vec{b}$", color='orange', fontsize=20)
ax.set_xlim(-0.5, 2.5)
ax.set_ylim(-0.5, 1.8)
ax.set_aspect('equal')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_title('Dot Product and Angle')
plt.grid(True, alpha=0.3)
'''

x = np.linspace(-4, 4, 400)
y_true = np.sin(x)
y_approx1 = x
y_approx2 = x - (x**3)/6
y_approx3 = x - (x**3)/6 + (x**5)/120

plt.figure(figsize=(6,5))

plt.plot(x, y_true, label='sin(x)', linewidth=5, color='red', alpha=0.55)
plt.plot(x, y_approx1, '--', label='1st term: x', color='#9500ff')
plt.plot(x, y_approx2, '--', label='Up to x³', color='#e100ff')
plt.plot(x, y_approx3, '--', label='Up to x⁵', color='#ff00c8')

plt.title('Maclaurin Series Approximation of sin(x)')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True, alpha=0.5)
plt.tight_layout()
plt.show()

plt.savefig('/Users/nana-kojobanafo/Documents/Physics Website/images/Maths For Physicists/Maclauren_Approximation.png')
plt.close(fig)


