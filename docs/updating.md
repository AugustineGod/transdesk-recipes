# How to update/change recipes

If you want to improve or update an existing recipe, please follow this guide.

## 1. Implement your updates

We highly suggest that you implement and test your updates to the recipe inside Transdesk before implementing them into the recipe repository. This will save you time on debugging and repackaging the recipe later.

You can find the recipe source Transdesk uses at:
  * Mac: `~/Library/Application Support/Transdesk/recipes/<recipe id>/`
  * Windows: `%appdata%/Transdesk/recipes/<recipe id>/`
  * Linux: `~/.config/Transdesk/recipes/<recipe id>`

> If you can't find the recipe's folder, please make sure that you have created a service inside Transdesk with that recipe - otherwise Transdesk will not load it into the folder

After changing the files in that folder, you can reload the service inside Transdesk using `CTRL/CMD + R`.

## 2. Setting up the recipe repository

Simply fork https://github.com/AugustineGod/transdesk-recipes. You may also want to clone the repository to your computer to edit it locally.

## 3. Updating the recipe inside the repository

Simply add your changes to the recipe inside this repository.

## 4. Updating the version number

You'll need to increase the version number inside recipe's `package.json`.

Transdesk uses this version to determine if it should update the local copy of the recipe. If you do not increase the version number, no Transdesk user will get your updated recipe 😔

## 5. Running the validation checks

This might be the __most important step__ of this guide. You'll need to run the `pnpm lint:fix && pnpm reformat-files && pnpm package` command to ensure that all validation checks are run.

## 6. Commit your changes and create a PR to <https://github.com/AugustineGod/transdesk-recipes>
