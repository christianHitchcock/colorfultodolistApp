import { mode } from '@chakra-ui/theme-tools'

export const CheckboxTheme = {
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: 'md',
          bg: 'transparent',
          border: '2px solid ',
          borderColor: 'hsl(236, 9%, 61%)',
        },
      },
      sizes: {
        xl: {
          control: {
            w: '1.5em',
            h: '1.5em',
          },
        },
      },
      variants: {
        'custom-control': (props) => ({
          control: {
            position: 'relative',
            border: '0.1em solid',
            marginRight: '10px',
            borderRadius: 'full',
            borderColor: mode('hsl(236, 9%, 61%)')(props),
            backgroundColor: mode('white', 'gray.900')(props),
            backgroundClip: 'padding-box',
            _checked: {
              border: '0.1em solid hsl(236, 9%, 61%)',
            },
            _hover: {
              border: '0.1em solid hsl(236, 9%, 61%)',
              _before: {
                content: "''",
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
                margin: '-0.1em',
                borderRadius: 'inherit',
                border: '0.5em solid hsl(236, 9%, 61%)',
                background: `linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))`,
              },
            },
          },
        }),
      },
      defaultProps: {
        size: 'xl',
      },
    },
  },
}
