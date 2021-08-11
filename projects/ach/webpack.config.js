const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json') 
);

module.exports = {
  output: {
    uniqueName: "ach",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },  
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({      
        // // For remotes (please adjust)
        name: "ach",      
        filename: "remoteEntry.js",
        exposes: {
            './Module': './projects/ach/src/app/pages/ach-home.module.ts',
           //'./Module': './projects/ach/src/app/flights/flights.module.ts',
        },               
        shared: {            
            '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0'  },
            "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0'  },
            "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0'  },
            "@angular/material": { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0'  },
             
            ...sharedMappings.getDescriptors()
          },
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
