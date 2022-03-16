import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary, pink, background } = context.theme.colors

  let opacities = [
    [0.2, 0.4, 0.4, 0.2, 0.3, 0.6, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [0.2, 0.3, 0.4, 0.3, 0.2, 0.3, 0.5, 0.6, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [0.1, 0.2, 0.3, 0.3, 0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 0.9],
    [0.1, 0.1, 0.1, 0.2, 0.7, 0.8, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.8, 0.6],
    [0.5, 0.5, 0.6, 0.8, 0.9, 0.9, 0.7, 0.5, 0.4, 0.5, 0.3, 0.3, 0.2, 0.2, 0.1],
    [0.5, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.3, 0.3, 0.2, 0.2, 0.2, 0.1, 0.1],
    [0.6, 0.4, 0.4, 0.4, 0.4, 0.2, 0.1, 0.1, 0.1, 0, 0, 0.1, 0.1, 0, 0],
    [0.5, 0.5, 0.3, 0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.1, 0, 0, 0, 0, 0],
    [0.3, 0.2, 0.2, 0.3, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.2, 0.1, 0, 0, 0],
    [0.4, 0.2, 0.2, 0.1, 0, 0.3, 0.1, 0.1, 0, 0.1, 0.2, 0.1, 0, 0, 0],
  ]

  let squares = []
  Array(10)
    .fill(0)
    .forEach((d, i) => {
      Array(15)
        .fill(0)
        .forEach((d, j) => {
          squares.push([i, j])
        })
    })

  return (
    <svg
      viewBox='0 0 150 100'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
    >
      {squares.map((d) => (
        <rect
          x={d[1] * 10}
          y={d[0] * 10}
          width={10.2}
          height={10.2}
          fill={primary}
          fillOpacity={opacities[d[0]][d[1]]}
        />
      ))}
    </svg>
  )
}

export default Logo
