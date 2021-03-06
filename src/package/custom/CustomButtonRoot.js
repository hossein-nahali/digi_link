import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stack from '@mui/material/Stack';
import {useButton} from '@mui/base/ButtonUnstyled';
import {styled} from '@mui/system';

const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
};

export const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  with
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  font-family: Vazir;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.active {
    background-color: ${blue[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
    const {children} = props;
    const {active, disabled, focusVisible, getRootProps} = useButton({
        ...props,
        ref,
        component: CustomButtonRoot,
    });

    const classes = {
        active,
        disabled,
        focusVisible,
    };

    return (
        <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
            {children}
        </CustomButtonRoot>
    );
});

CustomButton.propTypes = {
    children: PropTypes.node,
};