import * as React from 'react';
import { TextInput } from 'components/inputs';
import { TOKEN_CONFIG, ETH_NETWORK_CONFIG } from 'env';
import { globalStorage } from 'services/storage';
import { MenuItem } from 'components';
import { makeStyles } from 'utils/styles';

interface Option {
  value: string;
  label: string;
}

const tokens: Option[] = Object.values(ETH_NETWORK_CONFIG.tokenConfigs).map(config => ({
  label: config.symbolEth,
  value: config.contracts.token,
}));

const currentToken = TOKEN_CONFIG.contracts.token;

const useStyles = makeStyles({
  selectRoot: {
    minWidth: 65,
  },
});

export function SelectToken() {
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    globalStorage.set('token', event.target.value);
    document.location.reload();
  }, []);

  const classes = useStyles();

  return (
    <TextInput
      select
      variant="outlined"
      value={currentToken}
      onChange={handleChange}
      SelectProps={{
        classes: { root: classes.selectRoot },
      }}
    >
      {tokens.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextInput>
  );
}
