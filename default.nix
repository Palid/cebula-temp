{ pkgs ? import <nixpkgs> {}, ... }: let
    package-json = (builtins.fromJSON (builtins.readFile ./package.json));
in pkgs.buildNpmPackage {
    pname = package-json.name;
    version = package-json.version;
    src = ./.;

    npmDeps = pkgs.importNpmLock {
      npmRoot = ./.;
    };

    npmConfigHook = pkgs.importNpmLock.npmConfigHook;

    installPhase = ''
      mkdir -p $out/.next
      cp -r public $out/
      cp -r .next/standalone/{.*,*} $out/
      cp -r .next/static $out/.next
      mkdir $out/bin
      echo "#! /usr/bin/env bash" > $out/bin/cebula-site
      echo 'SOURCE=''${BASH_SOURCE[0]}' >> $out/bin/cebula-site
      echo 'cd $(dirname $SOURCE)/..' >> $out/bin/cebula-site
      echo 'exec ${pkgs.nodejs}/bin/node server.js' >> $out/bin/cebula-site
      chmod +x $out/bin/cebula-site
    '';
}
