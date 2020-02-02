#!/bin/bash
yarn rimraf .compiled-types temp && \
    yarn tsc -p . --declaration true --declarationMap true --outdir .compiled-types && \
    yarn api-extractor run --verbose && \
    yarn api-documenter markdown -i temp -o docs