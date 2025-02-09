{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }: {
    # nixosModules.default = import ./module.nix self;
  } // (flake-utils.lib.eachDefaultSystem (system: let
    pkgs = nixpkgs.legacyPackages.${system};
    package-json = (builtins.fromJSON (builtins.readFile ./package.json));
    in {
      packages.default = import ./default.nix { inherit pkgs; };
    }
  ));
}
